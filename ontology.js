module.exports = {
  '@context': {
    sa: 'http://ns.science.ai#',
    rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    owl: 'http://www.w3.org/2002/07/owl#',
    vs: 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
    xsd: 'http://www.w3.org/2001/XMLSchema#',
    bibo: 'http://purl.org/ontology/bibo/',
    skos: 'http://www.w3.org/2004/02/skos/core#',
    dc: 'http://purl.org/dc/terms/',
    schema: 'http://schema.org/',
    oa: 'http://www.w3.org/ns/oa#',
    hydra: 'http://www.w3.org/ns/hydra/core#',

    sameAs: { '@id': 'owl:sameAs', '@type': '@id' },
    seeAlso: { '@id': 'rdfs:seeAlso', '@type': '@id' },
    equivalentClass: { '@id': 'owl:equivalentClass', '@type': '@id' },
    equivalentProperty: { '@id': 'owl:equivalentProperty', '@type': '@id' },
    domain: { '@id': 'rdfs:domain', '@type': '@id' },
    range: { '@id': 'rdfs:range', '@type': '@id' },
    subClassOf: {
      '@id': 'rdfs:subClassOf',
      '@type': '@id',
      '@container': '@set'
    },
    comment: 'rdfs:comment',
    label: 'rdfs:label',
    altLabel: 'skos:altLabel',
    status: 'vs:term_status',
    source: { '@id': 'dc:source', '@type': '@id' },
    defines: { '@reverse': 'rdfs:isDefinedBy', '@type': '@id' }
  },

  '@id': 'https://ns.science.ai/',

  defines: [
    // Rhetorical elements kind of (all subclassOf schema:WebPageElement)
    {
      '@id': 'sa:WPUnspecified',
      '@type': 'rdfs:Class',
      label: 'WPUnspecified',
      comment: 'A section that is unknown or otherwise unspecified.',
      subClassOf: [],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAbstract',
      '@type': 'rdfs:Class',
      label: 'WPAbstract',
      comment:
        "A brief summary of a book, a research article, thesis, review, conference proceeding or any in-depth analysis of a particular subject or discipline, the purpose of which is to help the reader quickly ascertain the publication's purpose.",
      subClassOf: ['schema:CreativeWork'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAbstractSection',
      '@type': 'rdfs:Class',
      label: 'WPAbstractSection',
      comment: 'A section of an abstract',
      subClassOf: ['sa:Abstract'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPImpactStatement',
      '@type': 'rdfs:Class',
      label: 'WPImpactStatement',
      altLabel: 'Impact Statement',
      comment:
        "A brief summary, in lay terms of the impact of the work ('So what?',  'Who cares?' etc.).",
      subClassOf: ['schema:CreativeWork'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAuthors',
      '@type': 'rdfs:Class',
      label: 'WPAuthors',
      altLabel: ['Authors'],
      comment:
        'A list of items each denoting an author of a particular publication.',
      subClassOf: ['http://purl.org/spar/doco/ListOfAuthors'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPContributors',
      '@type': 'rdfs:Class',
      label: 'WPContributors',
      altLabel: ['Contributors'],
      comment:
        'A list of items, each denoting a contributor to a publication where such contributions are insufficient to warrant classification as author.',
      subClassOf: ['http://purl.org/spar/doco/ListOfContributors'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAffiliations',
      '@type': 'rdfs:Class',
      label: 'WPAffiliations',
      altLabel: ['Affiliations'],
      comment: 'A list of affiliations for the authors and contributors.',
      subClassOf: ['http://purl.org/spar/doco/ListOfOrganizations'],
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPIntroduction',
      '@type': 'rdfs:Class',
      label: 'Introduction',
      sameAs: 'http://purl.org/spar/deo/Introduction',
      comment:
        'An initial description which states the purpose and goals of the following writing, and, in the case of journal articles, typically includes background information on the research topic and a review of related work in the area.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPMaterialsAndMethods',
      '@type': 'rdfs:Class',
      label: 'WPMaterialsAndMethods',
      altLabel: ['Materials And Methods', 'Materials', 'Methods'],
      comment:
        "A description in a research paper documenting the specialized materials and/or methods used in the work described. This description is contained in a section often entitled 'Methods and Materials', 'Experimental' or a related term.",
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPNotes',
      '@type': 'rdfs:Class',
      label: 'WPNotes',
      comment:
        'A list of items that are general notes on the authors, affiliations, or the document.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPLicense',
      '@type': 'rdfs:Class',
      label: 'WPLicense',
      comment: 'A section conveying licensing information about the document.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPResults',
      '@type': 'rdfs:Class',
      label: 'WPResults',
      sameAs: 'http://purl.org/spar/deo/Results',
      comment:
        'The report of the specific findings of an investigation, given without discussion or conclusion being drawn.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPDiscussion',
      '@type': 'rdfs:Class',
      label: 'WPDiscussion',
      comment:
        'An interpretation and discussion of the results obtained and an analysis of their significance, in support of conclusions. These conclusions may be part of this discussion or may be included in a separate section of the document.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPConclusion',
      '@type': 'rdfs:Class',
      label: 'WPConclusion',
      comment:
        'A reflection on the preceding text, summarizing the evidence, arguments or premises presented in the document and their logical outcomes. Conclusions are a fundamental feature in academic research publications, and may be included in the Discussion section.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAcknowledgements',
      '@type': 'rdfs:Class',
      label: 'WPAcknowledgements',
      sameAs: 'http://purl.org/spar/deo/Acknowledgements',
      comment:
        'Usually part of the preface, or a separate section in its own right, often as part of the back matter, it acknowledges those, including funding agencies, who contributed to the undertaking of a research project described in a publication, or to the creation of the work in some way. In scientific articles, the acknowledgements are usually placed as a separated section immediately following the Discussion or Conclusions.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPCopyright',
      '@type': 'rdfs:Class',
      label: 'WPCopyright',
      comment: 'A section containing a copyright mention for the document.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPDisclosure',
      '@type': 'rdfs:Class',
      label: 'WPDisclosure',
      altLabel: ['Conflict of Interest', 'Competing Interest'],
      comment:
        'A section containing acknowledgment of facts that interfere with or could reasonably be perceived as interfering with the full and objective presentation, peer review, editorial decision-making, or publication of research',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPFunding',
      '@type': 'rdfs:Class',
      label: 'WPFunding',
      comment:
        'Person or Organization that funded the research on which a work was based.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPKeywords',
      '@type': 'rdfs:Class',
      label: 'WPKeywords',
      comment:
        "A section containing a list of keywords as part of the document's metadata.",
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPSupportingInformation',
      '@type': 'rdfs:Class',
      label: 'WPSupportingInformation',
      altLabel: 'Supporting Information',
      sameAs: 'http://purl.org/spar/doco/Appendix',
      altLabel: [
        'supplementary material',
        'supplementary files',
        'additional files',
        'additional information',
        'additional material',
        'appendix',
        'supplemental information',
        'supplemental material',
        'supplementary appendix',
        'supplementary data'
      ],
      comment:
        'Any information either auxiliary to the main content of the creative work or required to reproduce or verify the results of the creative work',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPReferenceList',
      '@type': 'rdfs:Class',
      label: 'WPReferenceList',
      altLabel: [
        'References',
        'Literature',
        'Bibliography',
        'Works Cited',
        'Citations'
      ],
      sameAs: 'http://purl.org/spar/doco/ListOfReferences',
      comment:
        'A list of items each representing a reference to a specific part of the same document, or to another publication.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPReference',
      '@type': 'rdfs:Class',
      label: 'WPReference',
      altLabel: ['Citation'],
      sameAs: 'http://purl.org/spar/deo/Reference',
      comment:
        'A reference to a specific part of the document, or to another publication.',
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    // Resource and encodings
    {
      '@id': 'sa:Formula',
      '@type': 'rdfs:Class',
      label: 'Formula',
      altLabel: ['Equation'],
      sameAs: 'http://purl.org/spar/doco/Formula',
      comment:
        'A unit of information expressed in mathematical, chemical or logical symbols and language.',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },
    {
      '@id': 'sa:FormulaObject',
      '@type': 'rdfs:Class',
      label: 'FormulaObject',
      altLabel: 'Formula Object',
      sameAs: 'http://purl.org/spar/doco/FormulaBox',
      comment: 'A formula object embedded in a web page',
      subClassOf: ['schema:MediaObject'],
      status: 'testing'
    },
    {
      '@id': 'sa:SoftwareSourceCodeObject',
      '@type': 'rdfs:Class',
      label: 'SoftwareSourceCodeObject',
      altLabel: 'Software Source Code Object',
      sameAs: 'http://purl.org/spar/doco/FormulaBox',
      comment: 'A source code object embedded in a web page',
      subClassOf: ['schema:MediaObject'],
      status: 'testing'
    },
    {
      '@id': 'sa:Image',
      '@type': 'rdfs:Class',
      label: 'Image',
      sameAs: 'http://purl.org/spar/doco/Figure',
      comment: 'An image resource',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },
    {
      '@id': 'sa:Video',
      '@type': 'rdfs:Class',
      label: 'Video',
      comment: 'A video resource',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },
    {
      '@id': 'sa:Audio',
      '@type': 'rdfs:Class',
      label: 'Audio',
      comment: 'An audio resource',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },

    {
      '@id': 'sa:TableObject',
      '@type': 'rdfs:Class',
      sameAs: 'http://purl.org/spar/doco/TableBox',
      label: 'TableObject',
      altLabel: 'Table Object',
      comment: 'A table object embedded in a web page',
      subClassOf: ['schema:MediaObject'],
      status: 'testing'
    },

    {
      '@id': 'sa:DocumentObject',
      '@type': 'rdfs:Class',
      label: 'DocumentObject',
      altLabel: 'Document Object',
      comment:
        'The most generic type for creative work encodings that are documents (HTML, LaTEX, DOCX, etc.)',
      subClassOf: ['schema:MediaObject'],
      status: 'testing'
    },

    {
      '@id': 'sa:Footnote',
      '@type': 'rdfs:Class',
      label: 'Footnote',
      subClassOf: 'schema:Comment',
      comment:
        'An ancillary piece of information typically displayed at the bottom of a page.',
      status: 'testing'
    },

    // Checksums
    {
      '@id': 'sa:Checksum',
      '@type': 'rdfs:Class',
      label: 'Checksum',
      subClassOf: 'schema:Intangible',
      comment:
        'A small-size datum from an arbitrary block of digital data for the purpose of detecting errors which may have been introduced during its transmission or storage.',
      status: 'testing',
      seeAlso: 'http://en.wikipedia.org/wiki/Checksum',
      equivalenClass:
        'http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#FileHash'
    },

    {
      '@id': 'sa:PerceptualHash',
      '@type': 'rdfs:Class',
      subClassOf: 'sa:Checksum',
      label: 'PerceptualHash',
      altLabel: ['Perceptual Hash', 'pHash'],
      comment:
        'A fingerprint of a multimedia file derived from various features from its content. Unlike cryptographic hash functions which rely on the avalanche effect of small changes in input leading to drastic changes in the output, perceptual hashes are close to one another if the features are similar and are resiliant to transformations such as rotation, skew, contrast adjustment and different compression/formats.',
      status: 'testing',
      seeAlso: 'https://en.wikipedia.org/wiki/Perceptual_hashing'
    },

    {
      '@id': 'sa:contentChecksum',
      '@type': 'rdf:Property',
      label: 'contentChecksum',
      comment: 'The checksum of a resource.',
      altLabel: 'content checksum',
      range: 'sa:Checksum',
      domain: 'schema:CreativeWork',
      status: 'testing',
      seeAlso: 'http://en.wikipedia.org/wiki/Checksum',
      equivalentProperty:
        'http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hasHash'
    },

    {
      '@id': 'sa:checksumAlgorithm',
      '@type': 'rdf:Property',
      label: 'checksumAlgorithm',
      altLabel: 'checksum algorithm',
      comment:
        'Name of the algorithm used to compute the checksum value. Examples might include MD5, SHA-1 etc.',
      range: 'xsd:string',
      domain: 'sa:Checksum',
      status: 'testing',
      seeAlso: 'http://en.wikipedia.org/wiki/Checksum',
      equivalentProperty:
        'http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hashAlgorithm'
    },

    {
      '@id': 'sa:checksumValue',
      '@type': 'rdf:Property',
      label: 'checksumValue',
      altLabel: ['checksum', 'hash'],
      comment:
        'The actual value of the hash in base64 if no datatype are present.',
      range: 'xsd:string',
      domain: 'sa:Checksum',
      status: 'testing',
      seeAlso: 'http://en.wikipedia.org/wiki/Checksum',
      equivalentProperty:
        'http://www.semanticdesktop.org/ontologies/2007/03/22/nfo/#hashValue'
    },

    // Progress
    {
      '@id': 'sa:ProgressEvent',
      '@type': 'rdfs:Class',
      label: 'ProgressEvent',
      subClassOf: 'schema:Event',
      altLabel: ['progress event'],
      comment:
        'An event providing information about the progress status of an action',
      status: 'testing'
    },

    {
      '@id': 'sa:progress',
      '@type': 'rdf:Property',
      label: 'progress',
      comment: 'A quantitative measure of the progress of an event',
      range: 'schema:QuantitativeValue',
      domain: 'schema:Event',
      status: 'testing'
    },

    // Permissions
    {
      '@id': 'sa:AdminPermission',
      '@type': 'rdfs:Class',
      subClassOf: 'schema:DigitalDocumentPermission',
      label: 'AdminPermission',
      altLabel: ['admin permission'],
      comment: 'Permission to administrate a resource.',
      status: 'testing'
    },

    {
      '@id': 'sa:CreateGraphPermission',
      '@type': 'rdfs:Class',
      subClassOf: 'schema:DigitalDocumentPermission',
      label: 'CreateGraphPermission',
      altLabel: ['create graph permission'],
      comment: 'Permission to create a Graph.',
      status: 'testing'
    },

    {
      '@id': 'sa:CommunicatePermission',
      '@type': 'rdfs:Class',
      subClassOf: 'schema:DigitalDocumentPermission',
      label: 'CommunicatePermission',
      altLabel: ['communicate permission'],
      comment: 'Permission to contact other agents based on their roles.',
      status: 'testing'
    },

    {
      '@id': 'sa:InvitePermission',
      '@type': 'rdfs:Class',
      subClassOf: 'schema:DigitalDocumentPermission',
      label: 'InvitePermission',
      altLabel: ['invite permission'],
      comment: 'Permission to invite other agents based on their roles.',
      status: 'testing'
    },

    {
      '@id': 'sa:ViewIdentityPermission',
      '@type': 'rdfs:Class',
      subClassOf: 'schema:DigitalDocumentPermission',
      label: 'ViewIdentityPermission',
      altLabel: ['view identity permission'],
      comment:
        'Permission to view the identity of other agents based on their roles.',
      status: 'testing'
    },

    {
      '@id': 'sa:permissionScope',
      '@type': 'rdf:Property',
      label: 'permissionScope',
      altLabel: 'permission scope',
      comment: 'The scope of a permission.',
      range: 'schema:Audience',
      domain: 'schema:DigitalDocumentPermission',
      status: 'testing'
    },

    {
      '@id': 'sa:audienceScope',
      '@type': 'rdf:Property',
      label: 'audienceScope',
      altLabel: 'audience scope',
      comment: 'The scope of a audience.',
      range: 'schema:Thing',
      domain: 'schema:Audience',
      status: 'testing'
    },

    {
      '@id': 'sa:numberOfRequiredReviews',
      '@type': 'rdf:Property',
      label: 'numberOfRequiredReviews',
      altLabel: 'number of required reviews',
      comment:
        'The number of reviews required before performing an assess action',
      domain: 'schema:AssessAction',
      range: 'schema:Number',
      status: 'testing'
    },

    {
      '@id': 'sa:numberOfRequiredInstances',
      '@type': 'rdf:Property',
      label: 'numberOfRequiredInstances',
      altLabel: 'number of required instances',
      comment: 'The number of instances of the action required',
      domain: 'schema:Action',
      range: 'schema:Number',
      status: 'testing'
    },

    // Errors
    {
      '@id': 'sa:Error',
      '@type': 'rdfs:Class',
      label: 'Error',
      subClassOf: 'schema:Intangible',
      comment:
        'A runtime error, used to report information beyond the returned status code.',
      status: 'testing',
      seeAlso: 'https://en.wikipedia.org/wiki/Access_control',
      equivalenClass: 'hydra:Error'
    },

    {
      '@id': 'sa:statusCode',
      '@type': 'rdf:Property',
      label: 'Error',
      comment: 'The HTTP status code.',
      range: 'schema:Integer',
      domain: 'sa:Error',
      status: 'testing',
      equivalentProperty: 'hydra:statusCode'
    },

    // Identifiers
    {
      '@id': 'sa:doi',
      '@type': 'rdf:Property',
      label: 'doi',
      comment: 'A digital object identifier (DOI) for the resource.',
      range: 'schema:URL',
      domain: 'schema:CreativeWork',
      status: 'testing',
      seeAlso: 'https://en.wikipedia.org/wiki/Digital_object_identifier',
      equivalentProperty: 'bibo:doi'
    },

    {
      '@id': 'sa:slug',
      '@type': 'rdf:Property',
      label: 'slug',
      comment:
        'Part of a URL that identifies a page in human-readable keywords',
      range: 'schema:Text',
      domain: 'sa:Graph',
      status: 'testing',
      seeAlso: 'https://en.wikipedia.org/wiki/Semantic_URL#Slug',
      equivalentProperty: 'http://www.bbc.co.uk/ontologies/provenance/slug'
    },

    // Annotations TODO https://github.com/scienceai/ontology/issues/28
    {
      '@id': 'sa:hasSelector',
      '@type': 'rdf:Property',
      label: 'hasSelector',
      comment:
        'A selector identifying the region of interest within the target resource',
      range: 'sa:Selector',
      domain: 'sa:TargetRole',
      status: 'testing',
      seeAlso: 'https://github.com/scienceai/web-verse',
      equivalentProperty: 'oa:hasSelector'
    },

    {
      '@id': 'sa:Selector',
      '@type': 'rdfs:Class',
      label: 'Selector',
      altLabel: 'Selector',
      comment: 'The most generic type of Selector',
      subClassOf: ['schema:Intangible'],
      equivalentClass: 'oa:Selector',
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:selectionContent',
      '@type': 'rdf:Property',
      label: 'selectionContent',
      altLabel: 'selection content',
      comment: 'The content of the selection',
      range: 'schema:Text',
      domain: 'sa:Selector',
      status: 'testing'
    },

    {
      '@id': 'sa:selectionHash',
      '@type': 'rdf:Property',
      label: 'selectionHash',
      altLabel: 'selection hash',
      comment: 'The hash of the content of the selection',
      range: 'schema:Text',
      domain: 'sa:Selector',
      status: 'testing'
    },

    {
      '@id': 'sa:NodeSelector',
      '@type': 'rdfs:Class',
      label: 'NodeSelector',
      altLabel: 'Node Selector',
      comment: 'A type of Selector to select a node within a Graph',
      subClassOf: ['sa:Selector'],
      status: 'testing'
    },

    {
      '@id': 'sa:nodeKey',
      '@type': 'rdf:Property',
      label: 'nodeKey',
      altLabel: 'node key',
      comment: 'The key (property) of the node targeted by the selector',
      range: 'schema:Text',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:nodeId',
      '@type': 'rdf:Property',
      label: 'nodeId',
      altLabel: 'node ID',
      comment: 'The @id of the node targeted by the selector',
      range: 'schema:Text',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:nodeValueId',
      '@type': 'rdf:Property',
      label: 'nodeValueId',
      altLabel: 'node value ID',
      comment:
        'The @id of the value targeted by the selector, this is especialy useful when the value is a list',
      range: 'schema:Text',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:WebVerseSelector',
      '@type': 'rdfs:Class',
      label: 'WebVerseSelector',
      altLabel: 'WebVerse Selector',
      comment:
        'A type of selector reasonably resilient to markup modifications and edits of the content',
      subClassOf: ['sa:NodeSelector'],
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:webVerseKey',
      '@type': 'rdf:Property',
      label: 'webVerseKey',
      altLabel: 'web verse key',
      comment: 'The key of a web verse selector',
      range: 'schema:Text',
      domain: 'sa:WebVerseSelector',
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:webVerseHash',
      '@type': 'rdf:Property',
      label: 'webVerseHash',
      altLabel: 'web verse hash',
      comment: 'The hash of a web verse selector',
      range: 'schema:Text',
      domain: 'sa:WebVerseSelector',
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:webVerseId',
      '@type': 'rdf:Property',
      label: 'webVerseId',
      altLabel: 'web verse id',
      comment: 'The identifier of a web verse selector',
      range: 'schema:Text',
      domain: 'sa:WebVerseSelector',
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:startOffset',
      '@type': 'rdf:Property',
      label: 'startOffset',
      altLabel: 'start offset',
      comment: 'A number representing where a range selection starts',
      range: 'schema:Number',
      domain: 'sa:Selector',
      status: 'testing'
    },

    {
      '@id': 'sa:endOffset',
      '@type': 'rdf:Property',
      label: 'endOffset',
      altLabel: 'end offset',
      comment: 'A number representing where a range selection ends',
      range: 'schema:Number',
      domain: 'sa:Selector',
      status: 'testing'
    },

    {
      '@id': 'sa:TargetRole',
      '@type': 'rdfs:Class',
      label: 'TargetRole',
      altLabel: 'Target Role',
      comment:
        'A subclass of Role allowing to specify specific selections of a target resource',
      subClassOf: ['schema:Role'],
      status: 'testing'
    },

    // Actions
    {
      '@id': 'sa:LinkAction',
      '@type': 'rdfs:Class',
      label: 'LinkAction',
      altLabel: 'Link Action',
      comment:
        'The act of annotating an object with the motivation of linking it',
      subClassOf: ['schema:CommentAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:TagAction',
      '@type': 'rdfs:Class',
      label: 'TagAction',
      altLabel: 'Tag Action',
      comment:
        'The act of annotating an object with the motivation of tagging / classifying it',
      subClassOf: ['schema:CommentAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:DeauthorizeAction',
      '@type': 'rdfs:Class',
      label: 'DeauthorizeAction',
      altLabel: 'Deauthorize Action',
      comment: 'The antonym of an AuthorizeAction',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:UnassignAction',
      '@type': 'rdfs:Class',
      label: 'UnassignAction',
      altLabel: 'Unassign Action',
      comment: 'The antonym of an AssignAction',
      subClassOf: ['schema:AllocateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CloneAction',
      '@type': 'rdfs:Class',
      label: 'CloneAction',
      altLabel: 'Clone Action',
      comment: 'The action of cloning (duplicating) an object',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:PaySeriesAction',
      '@type': 'rdfs:Class',
      label: 'PaySeriesAction',
      altLabel: 'Pay Series Action',
      comment:
        'A series of PayActions, essentially modelling a subscription with recurring payment.',
      subClassOf: ['schema:PayAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateOrganizationAction',
      '@type': 'rdfs:Class',
      label: 'CreateOrganizationAction',
      altLabel: 'Create Organization Action',
      comment: 'An action to create an Organization.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:AuthorizePaymentAction',
      '@type': 'rdfs:Class',
      label: 'AuthorizePaymentAction',
      altLabel: 'Authorize Payment Action',
      comment:
        'An action to authorize payment for an Organization, Person, etc.',
      subClassOf: ['schema:AuthorizeAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateServiceAction',
      '@type': 'rdfs:Class',
      label: 'CreateServiceAction',
      altLabel: 'Create Service Action',
      comment: 'An action to create a Service.',
      subClassOf: ['schema:CreateAction'],
      source: 'https://github.com/scienceai/librarian/issues/124',
      status: 'testing'
    },

    {
      '@id': 'sa:TypesettingAction',
      '@type': 'rdfs:Class',
      label: 'TypesettingAction',
      altLabel: 'Typesetting Action',
      comment: 'The act of typesetting a document',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateSandboxAction',
      '@type': 'rdfs:Class',
      label: 'CreateSandboxAction',
      altLabel: 'Create Sandbox Action',
      comment: 'The act of creating a sandbox',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:ResetAction',
      '@type': 'rdfs:Class',
      label: 'ResetAction',
      altLabel: 'Reset Action',
      comment: 'The act of reseting an object to its canonical state',
      subClassOf: ['sa:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:DisclosureAction',
      '@type': 'rdfs:Class',
      label: 'DisclosureAction',
      altLabel: 'Disclosure Action',
      comment: 'The act of making a disclosure.',
      subClassOf: ['schema:InformAction'],
      source: 'https://github.com/scienceai/scholarly-article/issues/20',
      status: 'testing'
    },

    {
      '@id': 'sa:AcknowledgeAction',
      '@type': 'rdfs:Class',
      label: 'AcknowledgeAction',
      altLabel: 'Acknowledge Action',
      comment:
        'The act of acknowledging someone, with no expectation of a response.',
      subClassOf: ['schema:CommunicateAction'],
      source: 'https://github.com/scienceai/scholarly-article/issues/20',
      status: 'testing'
    },

    {
      '@id': 'sa:UploadAction',
      '@type': 'rdfs:Class',
      label: 'UploadAction',
      altLabel: 'Upload Action',
      comment:
        'The act of uploading an object to an entry point within some Web-based protocol.',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateGraphAction',
      '@type': 'rdfs:Class',
      label: 'CreateGraphAction',
      altLabel: 'Create Graph Action',
      comment: 'The act of creating a graph.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateWorkflowStageAction',
      '@type': 'rdfs:Class',
      label: 'CreateWorkflowStageAction',
      altLabel: 'Create Workflow Stage Action',
      comment: 'The act of creating a workflow stage.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:DeleteGraphAction',
      '@type': 'rdfs:Class',
      label: 'DeleteGraphAction',
      altLabel: 'Delete Graph Action',
      comment: 'The act of deleting a graph.',
      subClassOf: ['schema:DeleteAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateReleaseAction',
      '@type': 'rdfs:Class',
      label: 'CreateReleaseAction',
      altLabel: 'Create Release Action',
      comment: 'The act of creating a release (snapshot) of an object.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreatePeriodicalAction',
      '@type': 'rdfs:Class',
      label: 'CreatePeriodicalAction',
      altLabel: 'Create Periodical Action',
      comment: 'The act of creating a periodical.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateOfferAction',
      '@type': 'rdfs:Class',
      label: 'CreateOfferAction',
      altLabel: 'Create Offer Action',
      comment: 'The act of creating an Offer.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:MimeDetectionAction',
      '@type': 'rdfs:Class',
      label: 'MimeDetectionAction',
      altLabel: 'Mime Detection Action',
      comment: 'The act of detecting the MIME type of an object.',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:ImageProcessingAction',
      '@type': 'rdfs:Class',
      label: 'ImageProcessingAction',
      altLabel: 'Image Processing Action',
      comment:
        'The act of converting an image object to web first format and extracting metadata about the object.',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:AudioVideoProcessingAction',
      '@type': 'rdfs:Class',
      label: 'AudioVideoProcessingAction',
      altLabel: 'Audio Video Processing Action',
      comment:
        'The act of converting an audio or video object to web first format and extracting metadata about the object.',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:RdfaConversionAction',
      '@type': 'rdfs:Class',
      label: 'RDFaConversionAction',
      altLabel: 'RDFa Conversion Action',
      comment:
        'The act of converting an object to RDFa (HTML web document with rich structured data markup).',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:SemanticTaggingAction',
      '@type': 'rdfs:Class',
      label: 'SemanticTaggingAction',
      altLabel: 'Semantic Tagging Action',
      comment:
        'The act of extracting semantic tags provided by web ontologies (OWL) or vocabularies (RDF Schema) from an object.',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:AssignUrlAction',
      '@type': 'rdfs:Class',
      label: 'AssignUrlAction',
      altLabel: 'Assign URL Action',
      comment: 'The act of assigning an URL to an object',
      subClassOf: ['schema:AssignAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreatePublicationTypeAction',
      '@type': 'rdfs:Class',
      label: 'CreatePublicationTypeAction',
      altLabel: 'Create Publication Type Action',
      comment: 'The act of creating a publication type',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreatePublicationElementTypeAction',
      '@type': 'rdfs:Class',
      label: 'CreatePublicationElementTypeAction',
      altLabel: 'Create Publication Element Type Action',
      comment: 'The act of creating a publication elememt type',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:UnassignUrlAction',
      '@type': 'rdfs:Class',
      label: 'UnassignUrlAction',
      altLabel: 'Unassign URL Action',
      comment: 'The antonym of an AssignUrlAction',
      subClassOf: ['schema:UnassignAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:suggestedResult',
      '@type': 'rdf:Property',
      label: 'suggestedResult',
      altLabel: 'suggested result',
      comment: 'The suggested result of an action',
      range: 'schema:Thing',
      domain: 'schema:Action',
      status: 'testing'
    },

    // Roles
    {
      '@id': 'sa:ContributorRole',
      '@type': 'rdfs:Class',
      label: 'ContributorRole',
      altLabel: 'Contributor Role',
      comment: 'A subclass of Role used to describe contributor roles.',
      subClassOf: ['schema:Role'],
      source: 'https://github.com/scienceai/scholarly.vernacular.io/issues/32',
      status: 'testing'
    },

    {
      '@id': 'sa:roleAffiliation',
      '@type': 'rdf:Property',
      label: 'roleAffiliation',
      altLabel: 'role affiliation',
      comment: 'The affiliation under which the role was performed.',
      range: 'schema:Organization',
      domain: 'sa:AuthoringRole',
      source: 'https://github.com/scienceai/scholarly.vernacular.io/issues/32',
      status: 'testing'
    },

    {
      '@id': 'sa:roleContactPoint',
      '@type': 'rdf:Property',
      label: 'roleContactPoint',
      altLabel: 'role contact point',
      comment:
        'A contact point for the person or organization behind an authoring role.',
      range: 'schema:ContactPoint',
      domain: 'sa:AuthoringRole',
      source: 'https://github.com/scienceai/scholarly.vernacular.io/issues/32',
      status: 'testing'
    },

    {
      '@id': 'sa:SponsorRole',
      '@type': 'rdfs:Class',
      label: 'SponsorRole',
      altLabel: 'Sponsor Role',
      comment: 'A subclass of Role used to describe sponsoring roles.',
      subClassOf: ['schema:Role'],
      source: 'https://github.com/scienceai/scholarly-article/issues/16',
      status: 'testing'
    },

    {
      '@id': 'sa:FunderRole',
      '@type': 'rdfs:Class',
      label: 'FunderRole',
      altLabel: 'Funder Role',
      comment: 'A subclass of Role used to describe funding (financing) roles.',
      subClassOf: ['schema:SponsorRole'],
      status: 'testing'
    },

    {
      '@id': 'sa:roleOffer',
      '@type': 'rdf:Property',
      label: 'roleOffer',
      altLabel: 'role offer',
      comment: "An offer made by the role's sponsor or funder.",
      range: 'schema:Offer',
      domain: 'sa:SponsorRole',
      source: 'https://github.com/scienceai/scholarly-article/issues/16',
      status: 'testing'
    },

    {
      '@id': 'sa:FundingSource',
      '@type': 'rdfs:Class',
      label: 'FundingSource',
      altLabel: 'Funding Source',
      comment: 'The most generic type of funding source',
      subClassOf: ['schema:Offer'],
      source: 'https://github.com/scienceai/scholarly-article/issues/16',
      status: 'testing'
    },

    {
      '@id': 'sa:roleAction',
      '@type': 'rdf:Property',
      label: 'roleAction',
      altLabel: 'role action',
      comment: "Indicates an action in which the role acts as an 'agent'.",
      range: 'schema:Action',
      domain: 'sa:ContributorRole',
      source: 'https://github.com/scienceai/scholarly-article/issues/20',
      status: 'testing'
    },

    // Facets
    {
      '@id': 'sa:Tag',
      '@type': 'rdfs:Class',
      label: 'Tag',
      comment:
        'A non-hierarchical keyword or term assigned to a piece of information',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },

    {
      '@id': 'sa:Facet',
      '@type': 'rdfs:Class',
      label: 'Facet',
      comment: 'A facet used in faceted search',
      subClassOf: ['schema:Intangible'],
      status: 'testing'
    },
    {
      '@id': 'sa:RangeFacet',
      '@type': 'rdfs:Class',
      label: 'Tag',
      comment: 'A facet computed over a range',
      subClassOf: ['sa:Facet'],
      status: 'testing'
    },
    {
      '@id': 'sa:itemListFacet',
      '@type': 'rdf:Property',
      label: 'itemListFacet',
      altLabel: 'item list facet',
      comment: 'Facets computed from the ItemList',
      range: 'sa:Facet',
      domain: 'schema:ItemList',
      status: 'testing'
    },
    {
      '@id': 'sa:count',
      '@type': 'rdf:Property',
      label: 'count',
      altLabel: 'count',
      comment: 'Total number of a collection of items',
      range: 'schema:Intangible',
      domain: 'sa:Facet',
      status: 'testing'
    },

    {
      '@id': 'sa:expectedDuration',
      '@type': 'rdf:Property',
      label: 'expectedDuration',
      comment: 'The expected duration of an Action',
      altLabel: 'expected duration',
      range: 'schema:Duration',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:activatedTime',
      '@type': 'rdf:Property',
      label: 'activatedTime',
      comment: 'The time when the action was activated',
      altLabel: 'activated time',
      range: 'schema:Duration',
      domain: 'sa:TypesettingAction',
      status: 'testing'
    },

    {
      '@id': 'sa:dateRejected',
      '@type': 'rdf:Property',
      label: 'dateRejected',
      comment: 'The rejection date',
      altLabel: 'date rejected',
      range: 'schema:Date',
      domain: 'sa:Graph',
      status: 'testing'
    },

    {
      '@id': 'sa:resultOf',
      '@type': 'rdf:Property',
      label: 'resultOf',
      comment: 'The Action which resulted in this Thing',
      altLabel: 'result of',
      range: 'schema:Thing',
      domain: 'schema:Thing',
      status: 'testing'
    },

    // Styles

    {
      '@id': 'sa:CssVariable',
      '@type': 'rdfs:Class',
      label: 'CssVariable',
      altLabel: 'CSS variable',
      comment: 'A CSS variable',
      subClassOf: ['schema:PropertyValue'],
      status: 'testing'
    },
    {
      '@id': 'sa:styleGuide',
      '@type': 'rdf:Property',
      label: 'styleGuide',
      altLabel: 'style guide',
      comment: 'A style guide used in the creation of the CreativeWork',
      range: 'sa:StyleGuide',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },
    {
      '@id': 'sa:StyleGuide',
      '@type': 'rdfs:Class',
      label: 'StyleGuide',
      altLabel: 'Style guide',
      comment: 'A style guide',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },

    {
      '@id': 'sa:style',
      '@type': 'rdf:Property',
      label: 'style',
      comment: 'describes how the creative work should be styled',
      range: 'sa:CssVariable',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },
    {
      '@id': 'sa:encodesStyle',
      '@type': 'rdf:Property',
      label: 'encodesStyle',
      altLabel: 'encodes style',
      comment: 'the CSS asset encoded by this MediaObject',
      range: 'sa:CssVariable',
      domain: 'schema:MediaObject',
      status: 'testing'
    },
    {
      '@id': 'sa:isStyleOf',
      '@type': 'rdf:Property',
      label: 'isStyleOf',
      altLabel: 'is style of',
      comment: 'the CreativeWork styled by this style',
      range: 'schema:CreativeWork',
      domain: 'sa:CssVariable',
      status: 'testing'
    },

    // Graph
    {
      '@id': 'sa:Graph',
      '@type': 'rdfs:Class',
      label: 'Graph',
      comment: 'A graph',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },

    {
      '@id': 'sa:resourceOf',
      '@type': 'rdf:Property',
      label: 'resourceOf',
      altLabel: 'resource of',
      comment: 'The Graph this node is a resource of',
      range: 'sa:Graph',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },

    // Creative work props
    {
      '@id': 'sa:detailedDescription',
      '@type': 'rdf:Property',
      label: 'detailedDescription',
      comment:
        'A detailed description (such as a named or structured abstract) of the item.',
      altLabel: 'detailed description',
      range: 'schema:CreativeWork',
      domain: 'schema:CreativeWork',
      status: 'testing',
      equivalentProperty: 'http://schema.googleapis.com/detailedDescription'
    },

    {
      '@id': 'sa:articleFrontMatter',
      '@type': 'rdf:Property',
      label: 'articleFrontMatter',
      altLabel: 'article front matter',
      comment: 'The article front matter',
      range: 'schema:Text',
      domain: 'schema:Article',
      status: 'testing'
    },

    {
      '@id': 'sa:articleBackMatter',
      '@type': 'rdf:Property',
      label: 'articleBackMatter',
      altLabel: 'article back matter',
      comment: 'The article back matter',
      range: 'schema:Text',
      domain: 'schema:Article',
      status: 'testing'
    },

    // Custom types
    {
      '@id': 'sa:PublicationType',
      '@type': 'rdfs:Class',
      label: 'PublicationType',
      comment: 'A type of publication',
      subClassOf: 'schema:Enumeration',
      status: 'testing'
    },

    {
      '@id': 'sa:PublicationElementType',
      '@type': 'rdfs:Class',
      label: 'PublicationElementType',
      comment: 'A type of publication element',
      subClassOf: 'schema:Enumeration',
      status: 'testing'
    },

    {
      '@id': 'sa:AuthorGuidelines',
      '@type': 'rdfs:Class',
      label: 'AuthorGuidelines',
      comment:
        'Guidelines providing instruction about how to write a given publication type',
      subClassOf: 'schema:HowTo',
      status: 'testing'
    },

    {
      '@id': 'sa:guidelines',
      '@type': 'rdf:Property',
      label: 'guidelines',
      altLabel: 'guidelines',
      comment: 'Guidelines  defining the publication type',
      range: 'schema:HowTo',
      domain: 'sa:PublicationType',
      status: 'testing'
    },

    {
      '@id': 'sa:publicationElementTypeCoverage',
      '@type': 'rdf:Property',
      label: 'publicationElementTypeCoverage',
      altLabel: 'publication element type coverage',
      comment: 'Specification of the publication element',
      range: 'sa:PublicationElementType',
      domain: 'sa:AuthorGuidelines',
      status: 'testing'
    },

    {
      '@id': 'sa:publicationTypeCoverage',
      '@type': 'rdf:Property',
      label: 'publicationTypeCoverage',
      altLabel: 'publication type coverage',
      comment: 'The type of publication covered by the periodical',
      range: 'sa:PublicationType',
      domain: 'schema:Periodical',
      status: 'testing'
    },

    // Service status
    {
      '@id': 'sa:ServiceStatusType',
      '@type': 'rdfs:Class',
      comment: 'The status of a Service.',
      label: 'ServiceStatusType',
      subClassOf: ['schema:Enumeration']
    },

    // Enumeration value
    {
      '@id': 'schema:ActiveServiceStatus',
      '@type': 'sa:ServiceStatusType',
      label: 'ActiveServiceStatus',
      comment: 'A service currently activated'
    },

    {
      '@id': 'sa:DeactivatedServiceStatus',
      '@type': 'sa:ServiceStatusType',
      label: 'DeactivatedServiceStatus',
      comment: 'A service currently deactivated'
    }
  ]
};