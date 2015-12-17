document.addEventListener('DOMContentLoaded', function() {
  d3.jsonldVis(data, '#viz', {
    w: 600,
    h: 800,
    maxLabelWidth: 240,
    transitionDuration: 450,
    scalingFactor: 10
  });

  var $code = document.querySelector('#example-jsonld code');
  $code.innerHTML = JSON.stringify(data, null, 2);

  var $a = document.querySelector('a[href="#example-jsonld"]');
  $a.addEventListener('click', function(e) {
    e.preventDefault();
    $code.parentElement.classList.toggle('hidden');
  });
});


var data = {
  "@context": "https://science.ai",
  "@id": "http://example.com/article",
  "@type": "ScholarlyArticle",

  "name": "article title",
  "description": "short abstract",
  "inLanguage": "en-US",
  "datePublished": "2012-12-01",

  "articleBody": "<article><h2 typeof='sa:Introduction'></h2></article>",

  "keywords": ["hypertext", "hypermedia"],

  "license": {
    "@id": "https://creativecommons.org/licenses/by/4.0/legalcode",
    "name": "CC-BY-4.0"
  },

  "copyrightYear": "2012",
  "copyrightHolder": {
    "@id": "https://www.sri.com",
    "@type": "Corporation",
    "name": "SRI International",
    "alternateName": "SRI"
  },

  "isPartOf": {
    "@id": "issueId",
    "@type": "PublicationIssue",
    "issueNumber": 10,
    "isPartOf": {
      "@id": "volumeId",
      "@type": "PublicationVolume",
      "volumeNumber": 2,
      "isPartOf": {
        "@id": "periodicalId",
        "@type": "Periodical",
        "name": "periodical"
      }
    }
  },

  "about": [
    // GenBank
    {
      "@id": "http://www.ncbi.nlm.nih.gov/nuccore/EU768872",
      "@type": "Dataset",
      "name": "EU768872",
      "description": "Ideonella dechloratans cytochrome C class 1 precursor and molybdopterin-guanine dinucleotide biosynthesis genes, complete cds",
      "isPartOf": {
        "@id": "http://www.ncbi.nlm.nih.gov/genbank/",
        "name": "GenBank",
        "@type": "DataCatalog"
      },
      "mainEntityOfPage": {
        "@id": "http://example.com/article#Results"
      }
    },

    // MeSH
    {
      "@id": "http://id.nlm.nih.gov/mesh/D007251",
      "@type": "InfectiousDisease",
      "name": "Influenza, Human",
      "description": "An acute viral infection in humans involving the respiratory tract. It is marked by inflammation of the NASAL MUCOSA; the PHARYNX; and conjunctiva, and by headache and severe, often generalized, myalgia.",
      "code": {
        "@type": "MedicalCode",
        "codeValue": "D007251",
        "codingSystem": "MeSH"
      },
      "mainEntityOfPage": {
        "@id": "#Discussion",
      }
    }
  ],

  "author": {
    "@type": "ContributorRole",
    "author": {
      "@id": "http://example.com/psullivan",
      "@type": "Person",
      "name": "Prof. James P Sullivan, MD",
      "givenName": "James",
      "familyName": "Sullivan",
      "additionalName": ["Peter", "Robert"],
      "honorificPrefix": "Prof",
      "honorificSuffix": "MD",
      "sameAs": "https://twitter.com/jsullivan"
    },
    "roleAffiliation": {
      "@id": "http://www.biology.as.nyu.edu/",
      "@type": "CollegeOrUniversity",
      "name": "Department of Biology",
      "parentOrganization": {
        "@id": "http://www.nyu.edu/",
        "@type": "CollegeOrUniversity",
        "name": "New York University",
        "alternateName": "NYU",
        "location": {
          "@type":  "Place",
          "address": {
            "@type":  "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "USA"
          }
        }
      },
      // funding attributed to organizations
      "sponsor": {
        "@type": "SponsorRole",
        "sponsor": {
          "@id": "http://www.gatesfoundation.org",
          "@type": "NGO",
          "name": "Bill & Melinda Gates Foundation"
        },
        "roleOffer": {
          "@type": "FundingSource",
          "name": "Collaboration for AIDS Vaccine Discovery Grant",
          "alternateName": "CAVD",
          "serialNumber": "OPP38631_01"
        },
        "startDate": "2009-11-19"
      }
    },

    // corresponding author
    "roleContactPoint": {
      "@type": "ContactPoint",
      "email": "james@example.com",
      "telephone": "+1-212-998-8200",
      "faxNumber": "+1-212-995-4015",
      "address": "Department of Biology, New York University, 70 Washington Square South, New York, NY 10012, USA"
    },

    "roleComment": [
      // author contributions
      {
        "@type": "Comment",
        "text": "wrote the introduction",
        "about": {
          "@type": "WriteAction",
          "result": {
            "@id": "http://example.com/article#Introduction",
            "@type": "Introduction"
          }
        }
      },
      {
        "@type": "Comment",
        "text": "senior author on this work",
        "about": {
          "@type": "CreateAction"
        }
      },

      // acknowledgements
      {
        "@type": "AcknowledgementStatement",
        "text": "is thankful for the pioneering contribution of: Bush, Vannevar \"Vannevar Bush\"",
        "about": {
          "@type": "CreateAction",
          "agent": {
            "@type": "Person",
            "name": "Vannevar Bush"
          }
        }
      },

      // disclosure
      {
        "@type": "DisclosureStatement",
        "text": "received personal fees for consulting for: Pfizer Inc - New York, NY, USA",
        "about": {
          "@type": "PayAction",
          "agent": {
            "@type": "Corporation",
            "name": "Pfizer",
            "location": {
              "@type":  "Place",
              "address": {
                "@type":  "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "USA"
              }
            }
          }
        }
      }
    ],

    // funding attributed to persons
    "sponsor": {
      "@type": "SponsorRole",
      "sponsor": {
        "@type": "GovernmentOrganization",
        "@id": "http://www.fic.nih.gov/",
        "@type": "GovernmentOrganization",
        "name": "Fogarty International Center",
        "parentOrganization": {
          "@id": "http://www.nih.gov",
          "@type": "GovernmentOrganization",
          "name": "National Institutes of Health",
          "alternateName": "NIH"
        }
      },
      "startDate": "2012-01-01"
    }
  },

  "contributor": {
    "@type": "ContributorRole",
    "contributor": {
      "@id": "http://example.com/engelbart",
      "@type": "Person",
      "name": "Douglas Carl Engelbart",
      "givenName": "Douglas",
      "familyName": "Engelbart",
      "additionalName": "Carl"
    },
    "roleAffiliation": {
      "@type": "Organization",
      "name": "Augmentation Research Center",
      "parentOrganization": {
        "@id": "https://www.sri.com",
        "@type": "Corporation",
        "name": "SRI International",
        "alternateName": "SRI",
        "location": {
          "@type":  "Place",
          "address": {
            "@type":  "PostalAddress",
            "addressLocality": "Menlo Park",
            "addressRegion": "CA",
            "addressCountry": "USA"
          }
        }
      }
    }
  },

  // funding attributed to the work
  "sponsor": {
    "@type": "SponsorRole",
    "sponsor": {
      "@type": "Organization",
      "name": "Collaborative systems",
      "parentOrganization": {
        "@id": "http://www.nsf.gov/div/index.jsp?div=IIS",
        "@type": "Organization",
        "name": "Div Of Information & Intelligent Systems",
        "alternateName": "IIS",
        "parentOrganization": {
          "@id": "http://www.nsf.gov/",
          "@type": "GovernmentOrganization",
          "name": "National Science Foundation",
          "alternateName": "NSF"
        }
      }
    },
    "roleOffer": {
      "@id": "http://www.nsf.gov/awardsearch/showAward?AWD_ID=0553202",
      "@type": "FundingSource",
      "name": "SGER: First Stages of Exploratory Development of HyperScope",
      "serialNumber": "award number 0553202"
    },
    "startDate": "2005-11-01",
    "endDate": "2006-12-31"
  },

  "hasPart": [

    // tables
    {
      "@id": "http://example.com/supporting-table",
      "@type": "Table",
      "license": {
        "@id": "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
        "name": "CC0-1.0"
      },
      "alternateName": "Supporting Table 1",
      "caption": "Analysis of social links",
      "author": {
        "@type": "ContributorRole",
        "author": {
          "@id": "http://example.com/engelbart",
          "@type": "Person",
          "name": "Douglas Carl Engelbart",
          "givenName": "Douglas",
          "familyName": "Engelbart",
          "additionalName": "Carl"
        },
        "roleContactPoint": {
          "@type": "ContactPoint",
          "email": "contact@example.com"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Created the experiment",
            "about": {
              "@type": "CreateAction"
            }
          }
        ]
      },
      "encoding": {
        "@type": "TableObject",
        "contentUrl": "http://example.com/supporting-table1",
        "fileFormat": "text/html"
      },
      "isBasedOnUrl": "http://example.com/supporting-code"
    },


    // figures
    {
      "@id": "http://example.com/figure",
      "@type": "Image",
      "alternateName": "Figure 1",
      "caption": "Xanadu growth projection",
      "author": {
        "@type": "ContributorRole",
        "author": {
          "@id": "http://example.com/psullivan",
          "@type": "Person",
          "name": "Prof. James P Sullivan, MD",
          "givenName": "James",
          "familyName": "Sullivan",
          "additionalName": ["Peter", "Robert"],
          "honorificPrefix": "Prof",
          "honorificSuffix": "MD",
          "sameAs": "https://github.com/jsullivan"
        },
        "roleContactPoint": {
          "@type": "ContactPoint",
          "email": "james@nyu.edu"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Collected the data"
          }
        ]
      },
      "contributor": {
        "@type": "ContributorRole",
        "contributor": {
          "@id": "http://example.com/engelbart",
          "@type": "Person",
          "name": "Douglas Carl Engelbart",
          "givenName": "Douglas",
          "familyName": "Engelbart",
          "additionalName": "Carl"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Prepared the figure"
          }
        ]
      },
      "isBasedOnUrl": [
        "http://example.com/supporting-code",
        "http://dx.doi.org/10.5061/dryad.1rk60"
      ],
      "license": {
        "@id": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "name": "CC-BY-4.0"
      },
      "copyrightYear": "2012",
      "copyrightHolder": {
        "@id": "https://www.sri.com",
        "@type": "Corporation",
        "name": "SRI International",
        "alternateName": "SRI"
      },
      "encoding": [
        {
          "@id": "http://example.com/source-image",
          "@type": "ImageObject",
          "contentUrl": "http://example.com/image.tiff",
          "fileFormat": "image/tiff",
          "width": "1600px",
          "height": "1600px"
        },
        {
          "@id": "http://example.com/converted-image",
          "@type": "ImageObject",
          "contentUrl": "http://example.com/image.png",
          "fileFormat": "image/png",
          "width": "1600px",
          "height": "1600px",
          "isBasedOnUrl": "http://example.com/source-image",
          "thumbnail": {
            "@id": "http://example.com/small-thumbnail",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-400x400.png",
            "fileFormat": "image/png",
            "width": "400px",
            "height": "400px",
            "isBasedOnUrl": "http://example.com/converted-image"
          }
        }
      ]
    },

    // multi-part figures
    {
      "@id": "http://example.com/multi-part-image",
      "@type": "Image",
      "alternateName": "Figure 2",
      "caption": "A: Tyrannosaurus rex; B: Stegosaurus; C: Brontosaurus; D: Pterodactyl",
      "hasPart": [
        {
          "@id": "http://example.com/image-part-a",
          "@type": "Image",
          "alternateName": "A",
          "caption": "Tyrannosaurus rex",
          "encoding": {
            "@id": "http://example.com/encoding-part-a",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-part-a.jpeg",
            "fileFormat": "image/jpeg"
          }
        },
        {
          "@id": "http://example.com/image-part-b",
          "@type": "Image",
          "alternateName": "B",
          "caption": "Stegosaurus",
          "encoding": {
            "@id": "http://example.com/encoding-part-b",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-part-b.jpeg",
            "fileFormat": "image/jpeg"
          }
        },
        {
          "@id": "http://example.com/image-part-c",
          "@type": "Image",
          "alternateName": "C",
          "caption": "Brontosaurus",
          "encoding": {
            "@id": "http://example.com/encoding-part-c",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-part-c.jpeg",
            "fileFormat": "image/jpeg"
          }
        },
        {
          "@id": "http://example.com/image-part-d",
          "@type": "Image",
          "alternateName": "D",
          "caption": "Pterodactyl",
          "encoding": {
            "@id": "http://example.com/encoding-part-d",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-part-d.jpeg",
            "fileFormat": "image/jpeg"
          }
        }
      ]
    },

    // video
    {
      "@id": "http://example.com/supporting-video",
      "@type": "Video",
      "license": {
        "@id": "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
        "name": "CC0-1.0"
      },
      "alternateName": "Supporting Video 1",
      "caption": "Computer Demonstration",
      "author": {
        "@type": "ContributorRole",
        "author": {
          "@id": "http://example.com/engelbart",
          "@type": "Person",
          "name": "Douglas Carl Engelbart",
          "givenName": "Douglas",
          "familyName": "Engelbart",
          "additionalName": "Carl"
        },
        "roleContactPoint": {
          "@type": "ContactPoint",
          "email": "contact@example.com"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Created the video",
            "about": {
              "@type": "CreateAction"
            }
          }
        ]
      },
      "encoding": [
        {
          "@type": "http://example.com/encoding-video-mov",
          "@type": "VideoObject",
          "name": "video.mov",
          "contentUrl": "http://example.com/supporting-video1.mov",
          "fileFormat": "video/quicktime"
        },
        {
          "@type": "http://example.com/encoding-video-mpeg",
          "@type": "VideoObject",
          "name": "video.mpeg",
          "contentUrl": "http://example.com/supporting-video1.mpeg",
          "fileFormat": "video/mpeg",
          "isBasedOnUrl": "http://example.com/encoding-video-mov",
          "thumbnail": {
            "@id": "http://example.com/video-small-thumbnail",
            "@type": "ImageObject",
            "contentUrl": "http://example.com/image-400x400.png",
            "fileFormat": "image/png",
            "width": "400px",
            "height": "400px",
            "isBasedOnUrl": "http://example.com/encoding-video-mpeg"
          }
        }
      ]
    },

    // dataset
    {
      "@id": "http://www.ncbi.nlm.nih.gov/nucleotide/U49845",
      "@type": "Dataset",
      "license": {
        "@id": "https://creativecommons.org/publicdomain/zero/1.0/legalcode",
        "name": "CC0-1.0"
      },
      "isPartOf": {
        "@id": "http://www.ncbi.nlm.nih.gov/genbank/",
        "name": "GenBank",
        "@type": "DataCatalog"
      },
      "alternateName": "Supporting Dataset 1",
      "caption": "Saccharomyces cerevisiae TCP1-beta gene",
      "author": {
        "@type": "ContributorRole",
        "author": {
          "@id": "http://example.com/psullivan",
          "@type": "Person",
          "name": "Prof. James P Sullivan, MD",
          "givenName": "James",
          "familyName": "Sullivan",
          "additionalName": ["Peter", "Robert"],
          "honorificPrefix": "Prof",
          "honorificSuffix": "MD"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Designed the experiment"
          }
        ]
      },
      "contributor": {
        "@type": "ContributorRole",
        "contributor": {
          "@id": "http://example.com/engelbart",
          "@type": "Person",
          "name": "Douglas Carl Engelbart",
          "givenName": "Douglas",
          "familyName": "Engelbart",
          "additionalName": "Carl"
        },
        "roleComment": [
          {
            "@type": "Comment",
            "text": "Deposited the data"
          }
        ]
      },
      // funding attributed to part of the work
      "sponsor": {
        "@type": "SponsorRole",
        "sponsor": {
          "@id": "http://www.dhs.gov/science-and-technology",
          "@type": "GovernmentOrganization",
          "name": "Science and Technology Directorate",
          "alternateName": "S&T",
          "parentOrganization": {
            "@id": "http://www.dhs.gov",
            "@type": "GovernmentOrganization",
            "name": "Department of Homeland Security",
            "alternateName": "DHS"
          }
        },
        "roleOffer": {
          "@type": "FundingSource",
          "serialNumber": "contract HSHQDC-12-C-00058"
        },
        "startDate": "2012-09-21"
      }
    },


    // equations
    {
      "@id": "http://example.com/equation",
      "@type": "Formula",
      "alternateName": "equation 1",
      "description": "Linear relationship",
      "encoding": {
        "@id": "http://example.com/encoding-equation",
        "@type": "FormulaObject",
        "fileFormat": "application/mathml+xml",
        "contentUrl": "http://example.com/equation1"
      }
    },

    // Code
    {
      "@id": "http://example.com/code",
      "@type": "SoftwareSourceCode",
      "alternateName": "code 1",
      "description": "Y combinator implemented in JavaScript",
      "programmingLanguage": {
        "name": "javascript"
      },
      "encoding": {
        "@id": "http://example.com/encoding-code",
        "@type": "MediaObject",
        "fileFormat": "application/javascript",
        "contentUrl": "http://example.com/code1"
      }
    },
    {
      "@id": "http://example.com/supporting-code",
      "@type": "SoftwareSourceCode",
      "alternateName": "Supporting Code 1",
      "programmingLanguage": {
        "name": "javascript"
      },
      "codeRepository": "http://example.com/code-repository"
    },

    // Text Boxes
    {
      "@id": "http://example.com/text-box",
      "@type": "WPSideBar",
      "alternateName": "text box 1",
      "description": "Ted Nelson",
      "encoding": {
        "@id": "http://example.com/text-box",
        "@type": "MediaObject",
        "fileFormat": "text/html",
        "contentUrl": "http://example.com/text-box1"
      }
    }

  ],

  "citation": [
    {
      "@id": "http://doi.org/doi",
      "@type": "ScholarlyArticle",
      "name": "On the effect of X on Y",
      "author": {
        "@type": "Person",
        "givenName": "Peter",
        "familyName": "Smith",
        "additionalName": "Jon",
        "name": "Peter J Smith"
      },
      "isPartOf": {
        "@type": "PublicationIssue",
        "issueNumber": 4,
        "isPartOf": {
          "@type": "PublicationVolume",
          "volumeNumber": 7,
          "isPartOf": {
            "@type": "Periodical",
            "name": "Journal of Metaphysics"
          }
        }
      },
      "pageStart": "615",
      "pageEnd": "620",
      "datePublished": {
        "@type": "xsd:gYearMonth",
        "@value": "2012-12"
      }
    },
    {
      "@id": "http://example.com/notes",
      "@type": "Webpage",
      "name": "Notes on memory machines",
      "author": {
        "@type": "Person",
        "givenName": "Jon",
        "familyName": "Markup"
      },
      "datePublished": {
        "@value": "2015-06-11",
        "@type": "xsd:date"
      },
      "potentialAction": {
        "@type": "ReadAction",
        "actionStatus": "CompletedActionStatus",
        "endTime": {
          "@value": "2012-06-11",
          "@type": "xsd:date"
        }
      }
    },
    {
      "@type": "Book",
      "isbn": "0893470627",
      "name": "Literary Machines",
      "author": {
        "@type": "Person",
        "name": "Ted Nelson"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eastgate"
      },
      "datePublished": {
        "@type": "xsd:gYear",
        "@value": 1993
      }
    }
  ],

  "potentialAction": [
    // paywall
    {
      "@type": "ReadAction",
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "potentialAction": {
          "@type": "PayAction",
          "price": "25USD"
        }
      }
    },

    // review the article
    {
      "@type": "ReviewAction",
      "agent-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": true
      },
      "resultReview-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": true
      },
      "target": {
        "@type": "EntryPoint",
        "httpMethod": "PUT",
        "urlTemplate": "http://example.com/review"
      }
    }
  ]

};
