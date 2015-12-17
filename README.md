
# scholarly-article

Extension of
[`schema:ScholarlyArticle`](http://schema.org/ScholarlyArticle) for
article components, rhetorical elements and other things that are
unlikely to make it to schema.org. The classes and properties defined
in `scholarly-article.json` should hopefully be self-documenting.

## See Also

- [DoCO, the Document Components Ontology](http://purl.org/spar/doco)
- [DEO, the Discourse Elements Ontology](http://purl.org/spar/deo).

Note these two ontologies also incorporate the
[SALT Rhetorical Ontology](http://salt.semanticauthoring.org/ontologies/sro.rdfs)
(no longer maintained).

- https://github.com/DrInventor/ontologies
- https://github.com/nature/public-npg-core-ontology

## Example (JSON-LD)

```
{
  "@id": "http://example.com/article",
  "@type": "ScholarlyArticle",

  "name": "article title",

  // mesh
  "about": {
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
  },

  "author": {
    "@type": "ContributorRole", // the persona (as opposed to the person)

    "author": {
      "@id": "http://example.com/peter",
      "@type": "Person",
      // the person affiliations (non specific to the work)
      "affiliation": [
        {
          "@id": "http://www.princeton.edu",
          "@type": "CollegeOrUniversity"
        },
        {
          "@id": "http://www.harvard.edu/",
          "@type": "CollegeOrUniversity"
        }
      ]
    },

    // the persona  affiliations (specific to the work)
    "roleAffiliation": {
      "@id": "http://www.princeton.edu",
      "@type": "CollegeOrUniversity"
    },

    // the persona sponsor
    "sponsor": {
      "@type": "SponsorRole",
      "sponsor": {
        "@type": "Organization"
      },
      "roleOffer": {
        "@type": "FundingSource",
        "serialNumber": "grantId"
      },
      "startDate": "2015-01-01"
    },

    // comments on the persona (Author notes, Disclosure Statements, Acknowledgment Statements)
    "roleComment": [
      {
        "@type": "Comment",
        "text": "senior author on this work"
        "about": {
          "@type": "CreateAction"
        }
      },

      {
        "@type": "Comment",
        "text": "wrote the article"
        "about": {
          "@type": "WriteAction"
        }
      },

      {
        "@type": "DisclosureStatement",
        "text": "received personal fees for consulting for: Pfizer Inc - New York, NY, USA.",
        "about": {
          "@type": "PayAction",
          "agent": {
            "@type": "Corporation",
            "name": "Pfizer"
          }
        }
      },

      {
        "@type": "AcknowledgementStatement",
        "text": "acknowledge the proofreading work of: Bush, Vannevar \"Vannevar Bush\""
        "about": {
          "@type": "ReadAction"
          "agent": {
            "@type": "Person",
            "name": "Vannevar Bush"
          }
        }
      }
    ]
  },

  // part of the article (Dataset, Code, Figures, ...)
  "hasPart": [
    {
      "@id": "http://example.com/image",
      "@type": "Image",
      "alternateName": "figure 1",
      "caption": "Growth of X as a function of Y",
      "encoding": [
        {
          "@id": "http://example.com/encodingsmall",
          "@type": "ImageObject",
          "contentUrl": "http://example.com/small"
          "height": "400px",
          "width": "400px",
          "isBasedOnUrl": "http://example.com/encodinglarge"
        },
        {
          "@id": "http://example.com/encodinglarge",
          "@type": "ImageObject",
          "contentUrl": "http://example.com/large",
          "height": "1200px",
          "width": "1200px"
        }
      ],
      "isBasedOnUrl": "http://example.com/code"
    },
    {
      "@id": "http://example.com/code",
      "@type": "SoftwareSourceCode",
      "codeRepository": "http://example.com/repository"
    }
  ],

  // Funding for the work itself
  "sponsor": {
    "@type": "SponsorRole",
    "sponsor": {
      "@type": "Organization"
    },
    "roleOffer": {
      "@type": "FundingSource",
      "serialNumber": "grantId"
    },
    "startDate": "2015-01-01"
  },

  // part of (issue / volume / journal)
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
        "@type": "Periodical"
      }
    }
  },

  "citation": [
    {
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
            "name": "Journal of metaphysics"
          }
        }
      },
      "pageStart": "615",
      "pageEnd": "620",
      "datePublished": {
        "@type": "xsd:gYear",
        "@value": 2015
      }
    },

    // WebPage, using a completed read action to capture the date when the webpage was accessed
    {
      "@id": "http://example.com/article",
      "@type": "Webpage",
      "name": "How much does 'typesetting' cost?",
      "author": {
        "@type": "Person",
        "givenName": "James",
        "familyName": "Sullivan",
        "name": "James Sullivan"
      },
      "datePublished": {
        "@value": "2015-06-11"
        "@type": "xsd:date"
      },
      "potentialAction": {
        "@type": "ReadAction",
        "actionStatus": "CompletedActionStatus",
        "endTime": {
          "@value": "2015-06-11"
          "@type": "xsd:date"
        }
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
          "price": "100USD"
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
    },


    // pre-print aiming to be published somewhere
    {
      "@type": "AddAction",
      "targetCollection": {
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
            "name": "Tiqqun"
          }
        }
      }
    }
  ]

}
```

## Example (RDFa)

https://research.science.ai/article/on-the-marginal-cost-of-scholarly-communication
