import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('nieuws');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Query news items from CMS
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/news/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY", locale: "nl")
              summary
              image {
                childImageSharp {
                  gatsbyImageData(
                    height: 300
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    quality: 90
                  )
                }
              }
            }
            excerpt(pruneLength: 150)
            html
          }
        }
      }
    }
  `);

  const newsItems = data.allMarkdownRemark.edges.map(({ node }) => ({
    id: node.id,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    summary: node.frontmatter.summary || node.excerpt,
    image: node.frontmatter.image ? getImage(node.frontmatter.image) : null,
    content: node.html
  }));

  // Pagination logic
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedArticle) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedArticle]);

  return (
    <section id="nieuws" className="pt-48 pb-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-vat text-vat-yellow mb-6">
              Nieuws
            </h2>
          </div>

          {/* Masonry/Pinterest Style Layout */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

            {/* Mobile: Staggered + Varied Layout */}
            <div className="md:hidden">
              {(showAll ? newsItems : newsItems.slice(0, 4)).map((item, index) => {
                const getMobileLayout = (index) => {
                  if (index % 3 === 1) return { size: 'compact', offset: 'ml-8', width: 'w-4/5' };
                  if (index % 3 === 2) return { size: 'medium', offset: 'mr-8', width: 'w-4/5' };
                  return { size: 'normal', offset: '', width: 'w-full' };
                };

                const layout = getMobileLayout(index);

                return (
                  <article
                    key={item.id}
                    className={`${layout.width} ${layout.offset} mb-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer`}
                    onClick={() => openModal(item)}
                  >
                    {item.image && (
                      <div className="overflow-hidden flex justify-center">
                        <GatsbyImage
                          image={item.image}
                          alt={item.title}
                          className="hover:scale-105 transition-transform duration-500"
                          objectFit="contain"
                        />
                      </div>
                    )}

                    <div className="p-4">
                      {/* Date */}
                      <div className="text-sm font-vat_smalltext text-vat-green mb-3">
                        {item.date}
                      </div>

                      {/* Title */}
                      <h3 className={`font-vat text-vat-purple mb-3 leading-tight ${
                        layout.size === 'compact' ? 'text-base' : 'text-lg'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="font-vat_smalltext text-vat-smalltext leading-relaxed mb-4 text-sm">
                        {layout.size === 'compact' ? (item.summary.length > 80 ? item.summary.substring(0, 80) + '...' : item.summary) :
                         (item.summary.length > 120 ? item.summary.substring(0, 120) + '...' : item.summary)}
                      </p>

                      {/* Read More */}
                      <div className="text-vat-purple font-vat_smalltext text-sm hover:text-vat-green transition-colors duration-300">
                        Lees meer →
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Desktop: Masonry Layout */}
            <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
              {(showAll ? newsItems : newsItems.slice(0, 4)).map((item, index) => {
                // Define different card sizes for visual interest
                const getCardSize = (index) => {
                  if (index % 4 === 1) return 'tall'; // Every 5th item (1, 5, 9...) is tall
                  if (index % 3 === 0) return 'wide'; // Every 3rd item is wide
                  return 'normal';
                };

                const cardSize = getCardSize(index);

                return (
                  <article
                    key={item.id}
                    className={`break-inside-avoid mb-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer`}
                    onClick={() => openModal(item)}
                  >
                    {item.image && (
                      <div className="overflow-hidden flex justify-center">
                        <GatsbyImage
                          image={item.image}
                          alt={item.title}
                          className="hover:scale-105 transition-transform duration-500"
                          objectFit="contain"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      {/* Date */}
                      <div className="text-sm font-vat_smalltext text-vat-green mb-3">
                        {item.date}
                      </div>

                      {/* Title */}
                      <h3 className={`font-vat text-vat-purple mb-4 leading-tight ${
                        cardSize === 'tall' ? 'text-xl' : 'text-lg'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className={`font-vat_smalltext text-vat-smalltext leading-relaxed mb-4 ${
                        cardSize === 'tall' ? 'text-base' : 'text-sm'
                      }`}>
                        {cardSize === 'tall' ? (item.summary.length > 150 ? item.summary.substring(0, 150) + '...' : item.summary) :
                         (item.summary.length > 100 ? item.summary.substring(0, 100) + '...' : item.summary)}
                      </p>

                      {/* Read More */}
                      <div className="text-vat-purple font-vat_smalltext text-sm hover:text-vat-green transition-colors duration-300">
                        Lees meer →
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Expand/Collapse Button */}
            {newsItems.length > 4 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-white hover:bg-gray-50 text-vat-mediumtext border-2 border-vat-mediumtext hover:border-vat-subtext px-8 py-3 rounded-lg font-vat transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  {showAll ? (
                    <>
                      Toon minder
                      <svg className="w-5 h-5 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Meer nieuws
                      <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}

        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Article Image */}
            {selectedArticle.image && (
              <div className="overflow-hidden rounded-t-2xl">
                <GatsbyImage
                  image={selectedArticle.image}
                  alt={selectedArticle.title}
                  className=""
                  objectFit="contain"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="p-6 lg:p-8">
              {/* Date */}
              <div className="text-sm font-vat_smalltext text-vat-green mb-4">
                {selectedArticle.date}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-vat text-vat-purple mb-6">
                {selectedArticle.title}
              </h1>


              {/* Article Body */}
              <div
                className="font-vat_smalltext text-vat-smalltext leading-relaxed prose prose-lg max-w-none
                  prose-headings:font-vat prose-headings:text-vat-purple
                  prose-p:text-vat-smalltext prose-p:mb-4
                  prose-a:text-vat-linktext prose-a:underline hover:prose-a:text-vat-subtext prose-a:transition-colors
                  prose-strong:text-vat-green prose-strong:font-semibold
                  prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
                  prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
                  prose-li:text-vat-smalltext prose-li:mb-2
                  prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSection;