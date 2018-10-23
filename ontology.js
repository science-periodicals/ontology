// TODO? graph status (archived / rejected etc.)

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
    subPropertyOf: 'rdfs:subPropertyOf',
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
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAbstract',
      '@type': 'rdfs:Class',
      label: 'WPAbstract',
      comment:
        "A brief summary of a book, a research article, thesis, review, conference proceeding or any in-depth analysis of a particular subject or discipline, the purpose of which is to help the reader quickly ascertain the publication's purpose.",
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAbstractSection',
      '@type': 'rdfs:Class',
      label: 'WPAbstractSection',
      comment: 'A section of an abstract',
      subClassOf: 'sa:Abstract',
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
      subClassOf: 'schema:WebPageElement',
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
      subClassOf: 'schema:WebPageElement',
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
      subClassOf: 'schema:WebPageElement',
      status: 'testing',
      source: 'https://github.com/scienceai/ontology/issues/26'
    },

    {
      '@id': 'sa:WPAffiliations',
      '@type': 'rdfs:Class',
      label: 'WPAffiliations',
      altLabel: ['Affiliations'],
      comment: 'A list of affiliations for the authors and contributors.',
      subClassOf: 'schema:WebPageElement',
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

    // release requirements
    {
      '@id': 'sa:releaseRequirement',
      '@type': 'rdf:Property',
      label: 'releaseRequirement',
      comment: 'The release requirement',
      altLabel: 'release requirement',
      range: 'sa:ReleaseRequirementType',
      domain: 'sa:CreateReleaseAction',
      status: 'testing'
    },

    {
      '@id': 'sa:ReleaseRequirementType',
      '@type': 'rdfs:Class',
      comment: 'Release requirement',
      label: 'ReleaseRequirementType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:SubmissionReleaseRequirement',
      '@type': 'sa:ReleaseRequirementType',
      label: 'SubmissionReleaseRequirement',
      comment:
        'Submission release requirement (as opposed to production release requirement)'
    },

    {
      '@id': 'sa:ProductionReleaseRequirement',
      '@type': 'sa:ReleaseRequirementType',
      label: 'ProductionReleaseRequirement',
      comment:
        'Production release requirement (as opposed to submission release requirement)'
    },

    // Tokens
    {
      '@id': 'sa:Token',
      '@type': 'rdfs:Class',
      label: 'Token',
      subClassOf: 'schema:Intangible',
      comment: 'A token',
      status: 'testing',
      seeAlso: 'https://en.wikipedia.org/wiki/Access_token'
    },
    {
      '@id': 'sa:tokenType',
      '@type': 'rdf:Property',
      label: 'tokenType',
      comment: 'The type of the token.',
      altLabel: 'token type',
      range: 'schema:Text',
      domain: 'sa:Token',
      status: 'testing'
    },
    {
      '@id': 'sa:tokenValue',
      '@value': 'rdf:Property',
      label: 'tokenValue',
      comment: 'The value of the token.',
      altLabel: 'token value',
      range: 'schema:Text',
      domain: 'sa:Token',
      status: 'testing'
    },
    {
      '@id': 'sa:password',
      '@value': 'rdf:Property',
      label: 'password',
      comment: 'A password.',
      altLabel: 'password',
      range: 'schema:Text',
      domain: 'sa:Token',
      status: 'testing'
    },

    // token status
    {
      '@id': 'sa:tokenStatus',
      '@type': 'rdf:Property',
      label: 'tokenStatus',
      comment: 'The status of a Token',
      altLabel: 'token status',
      range: 'sa:TokenStatusType',
      domain: 'sa:Token',
      status: 'testing'
    },

    {
      '@id': 'sa:TokenStatusType',
      '@type': 'rdfs:Class',
      comment: 'The status of a token',
      label: 'TokenStatusType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:PotentialTokenStatus',
      '@type': 'sa:TokenStatusType',
      label: 'PotentialTokenStatus',
      comment: 'A token waiting to be activated'
    },

    {
      '@id': 'sa:ActiveTokenStatus',
      '@type': 'sa:TokenStatusType',
      label: 'ActiveTokenStatus',
      comment: 'An active token'
    },

    {
      '@id': 'sa:ArchivedTokenStatus',
      '@type': 'sa:TokenStatusType',
      label: 'ArchivedTokenStatus',
      comment: 'An archived token'
    },

    // DiscountToken
    {
      '@id': 'sa:DiscountToken',
      '@type': 'rdfs:Class',
      label: 'DiscountToken',
      subClassOf: 'sa:Token',
      comment: 'A discount token',
      status: 'testing'
    },

    {
      '@id': 'sa:percentDiscount',
      '@type': 'rdf:Property',
      label: 'percentDiscount',
      comment: 'The percent discount granted by the token',
      altLabel: 'percent discount',
      range: 'sa:Number',
      domain: 'sa:DiscountToken',
      status: 'testing'
    },

    {
      '@id': 'sa:eligibleJournal',
      '@type': 'rdf:Property',
      label: 'eligibleJournal',
      comment: 'The journal for which the token is valid.',
      altLabel: 'eligible journal',
      range: 'schema:Periodical',
      domain: 'sa:DiscountToken',
      status: 'testing'
    },

    {
      '@id': 'sa:eligibleAction',
      '@type': 'rdf:Property',
      label: 'eligibleAction',
      comment: 'The action for which the token is valid.',
      altLabel: 'eligible action',
      range: 'schema:Action',
      domain: 'sa:DiscountToken',
      status: 'testing'
    },

    // Auth token
    {
      '@id': 'sa:AuthenticationToken',
      '@type': 'rdfs:Class',
      label: 'AuthenticationToken',
      subClassOf: 'sa:Token',
      comment: 'An authentication token',
      status: 'testing'
    },

    // Payment token
    {
      '@id': 'sa:PaymentToken',
      '@type': 'rdfs:Class',
      label: 'PaymentToken',
      subClassOf: 'sa:Token',
      comment: 'A payment token',
      status: 'testing'
    },

    {
      '@id': 'sa:paymentToken',
      '@type': 'rdf:Property',
      label: 'paymentToken',
      comment: 'A payment token',
      altLabel: 'payment token',
      range: 'sa:PaymentToken',
      domain: 'schema:Action',
      subPropertyOf: 'schema:instrument',
      status: 'testing'
    },

    // Password
    {
      '@id': 'sa:Password',
      '@type': 'rdfs:Class',
      label: 'Password',
      subClassOf: 'sa:Token',
      comment: 'A password',
      status: 'testing'
    },

    // token actions
    {
      '@id': 'sa:CreateAuthenticationTokenAction',
      '@type': 'rdfs:Class',
      label: 'CreateAuthenticationTokenAction',
      altLabel: 'Create Authentication Token Action',
      comment: 'The act of creating an authentication token.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateDiscountTokenAction',
      '@type': 'rdfs:Class',
      label: 'CreateDiscountTokenAction',
      altLabel: 'Create discount token Action',
      comment: 'The act of creating a discount token.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:UpdatePasswordAction',
      '@type': 'rdfs:Class',
      label: 'UpdatePasswordAction',
      altLabel: 'Update Password Action',
      comment: 'The act of updating a password.',
      subClassOf: ['schema:UpdateAction'],
      status: 'testing'
    },

    // Resource and encodings
    {
      '@id': 'sa:reviewer',
      '@type': 'rdf:Property',
      label: 'reviewer',
      comment: 'The reviewer of the content.',
      altLabel: 'reviewer',
      range: 'sa:Person',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },

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
      '@id': 'sa:TextBox',
      '@type': 'rdfs:Class',
      label: 'TextBox',
      altLabel: 'Text Box',
      comment: 'A text box.',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },
    {
      '@id': 'sa:TextBoxObject',
      '@type': 'rdfs:Class',
      label: 'TextBoxObject',
      altLabel: 'Text Box Object',
      comment: 'The encoding of a text box',
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
      '@id': 'sa:minInstances',
      '@type': 'rdf:Property',
      label: 'minInstances',
      altLabel: 'minimum number of required instances',
      comment: 'The minimum number of instances of the action required',
      domain: 'schema:Action',
      range: 'schema:Number',
      status: 'testing'
    },

    {
      '@id': 'sa:maxInstances',
      '@type': 'rdf:Property',
      label: 'maxInstances',
      altLabel: 'maximum number of required instances',
      comment: 'The maximum number of instances of the action required',
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

    // Warnings
    {
      '@id': 'sa:Warning',
      '@type': 'rdfs:Class',
      label: 'Warning',
      subClassOf: 'schema:Intangible',
      comment: 'A warning.',
      status: 'testing'
    },

    {
      '@id': 'sa:warning',
      '@type': 'rdf:Property',
      label: 'warning',
      comment: 'warning.',
      range: 'sa:Warning',
      domain: 'schema:Action',
      status: 'testing'
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

    // Annotations see https://github.com/scienceai/ontology/issues/28
    {
      '@id': 'sa:ReviewAnnotation',
      '@type': 'rdfs:Class',
      label: 'ReviewAnnotation',
      subClassOf: 'schema:Comment',
      comment: 'An annotation part of a Review',
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
      '@id': 'sa:hasSubSelector',
      '@type': 'rdf:Property',
      label: 'hasSubSelector',
      comment: 'A sub selector refining the selection of a parent selector',
      range: 'sa:Selector',
      domain: 'sa:Selector',
      status: 'testing',
      equivalentProperty: 'oa:refinedBy'
    },

    // Selector and subclasses
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
      '@id': 'sa:NodeSelector',
      '@type': 'rdfs:Class',
      label: 'NodeSelector',
      altLabel: 'Node Selector',
      comment: 'A type of Selector to select a node within a Graph',
      subClassOf: ['sa:Selector'],
      status: 'testing'
    },

    {
      '@id': 'sa:HtmlSelector',
      '@type': 'rdfs:Class',
      label: 'HtmlSelector',
      altLabel: 'HTML Selector',
      comment: 'A type of Selector to select a HTML content',
      subClassOf: ['sa:NodeSelector'],
      status: 'testing'
    },

    {
      '@id': 'sa:htmlId',
      '@type': 'rdf:Property',
      label: 'htmlId',
      altLabel: 'HTML ID',
      comment: 'The ID of an HTML element',
      range: 'schema:Text',
      domain: 'sa:HtmlSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:webVerseId',
      '@type': 'rdf:Property',
      label: 'webVerseId',
      altLabel: 'web verse ID',
      comment: 'The ID of a web verse selector',
      range: 'schema:Text',
      domain: 'sa:HtmlSelector',
      seeAlso: 'https://github.com/scienceai/web-verse',
      status: 'testing'
    },

    {
      '@id': 'sa:graph',
      '@type': 'rdf:Property',
      label: 'graph',
      altLabel: 'graph',
      comment: 'The graph targeted by the selector',
      range: 'sa:Graph',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:node',
      '@type': 'rdf:Property',
      label: 'node',
      altLabel: 'node',
      comment: 'The node targeted by the selector',
      range: 'schema:Thing',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:selectedProperty',
      '@type': 'rdf:Property',
      label: 'selectedProperty',
      altLabel: 'selected property',
      comment: 'The property of the node targeted by the selector',
      range: 'schema:Text',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:selectedItem',
      '@type': 'rdf:Property',
      label: 'selectedItem',
      altLabel: 'selected item',
      comment:
        'An identifier for the item in case where selectedProperty takes a list for value',
      range: 'schema:Text',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:selectedValue',
      '@type': 'rdf:Property',
      label: 'selectedValue',
      altLabel: 'selected value',
      comment: 'The selected value',
      range: 'schema:Thing',
      domain: 'sa:Selector',
      status: 'testing'
    },

    // selector checksums
    {
      '@id': 'sa:selectedValueChecksum',
      '@type': 'rdf:Property',
      label: 'selectedValueChecksum',
      altLabel: 'selected value checksum',
      comment: 'A checksum of the selected value',
      range: 'schema:Checksum',
      domain: 'sa:Selector',
      status: 'testing'
    },

    {
      '@id': 'sa:nodeChecksum',
      '@type': 'rdf:Property',
      label: 'nodeChecksum',
      altLabel: 'node checksum',
      comment: 'A checksum of the full node (not only the selection)',
      range: 'schema:Checksum',
      domain: 'sa:NodeSelector',
      status: 'testing'
    },

    {
      '@id': 'sa:documentChecksum',
      '@type': 'rdf:Property',
      label: 'documentChecksum',
      altLabel: 'document checksum',
      comment: 'A checksum of the whole HTM document (not only the selection)',
      range: 'schema:Checksum',
      domain: 'sa:HtmlSelector',
      status: 'testing'
    },

    // webverse extra props
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

    // Actions
    {
      '@id': 'sa:AnchorAction',
      '@type': 'rdfs:Class',
      label: 'AnchorAction',
      altLabel: 'Anchor Action',
      comment: 'The act of anchoring an object',
      subClassOf: ['schema:OrganizeAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:WithdrawAction',
      '@type': 'rdfs:Class',
      label: 'WithdrawAction',
      altLabel: 'Withdraw Action',
      comment: 'The act of withdrawing an object',
      subClassOf: ['schema:Action'],
      status: 'testing'
    },

    {
      '@id': 'sa:ArchiveAction',
      '@type': 'rdfs:Class',
      label: 'ArchiveAction',
      altLabel: 'Archive Action',
      comment: 'The act of archiving an object',
      subClassOf: ['schema:Action'],
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
      '@id': 'sa:AuthorizeContributorAction',
      '@type': 'rdfs:Class',
      label: 'AuthorizeContributorAction',
      altLabel: 'Authorize Contributor Action',
      comment: 'The act of adding a contributor (recipient) to an object',
      subClassOf: ['schema:AuthorizeAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:DeauthorizeContributorAction',
      '@type': 'rdfs:Class',
      label: 'DeauthorizeContributorAction',
      altLabel: 'Deauthorize Contributor Action',
      comment: 'The act of terminating a contributor (recipient) of an object',
      subClassOf: ['sa:DeauthorizeAction'],
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
      '@id': 'sa:CreateOrganizationAction',
      '@type': 'rdfs:Class',
      label: 'CreateOrganizationAction',
      altLabel: 'Create Organization Action',
      comment: 'An action to create an Organization.',
      subClassOf: ['schema:CreateAction'],
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
      '@id': 'sa:StartWorkflowStageAction',
      '@type': 'rdfs:Class',
      label: 'StartWorkflowStageAction',
      altLabel: 'Start Workflow Stage Action',
      comment: 'The act of starting and instantiating a workflow stage.',
      subClassOf: ['schema:Action'],
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
      '@id': 'sa:PublishAction',
      '@type': 'rdfs:Class',
      label: 'PublishAction',
      altLabel: 'Publish Action',
      comment: 'The act of publishing an object.',
      subClassOf: ['sa:CreateReleaseAction'],
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

    // APC negotation
    {
      '@id': 'sa:requestedPrice',
      '@value': 'rdf:Property',
      label: 'requestedPrice',
      comment:
        'The requested price in the same currency as the priceSpecification.',
      altLabel: 'requested price',
      range: 'schema:Number',
      domain: 'schema:PayAction',
      status: 'testing'
    },

    // Issues
    {
      '@id': 'sa:CreatePublicationIssueAction',
      '@type': 'rdfs:Class',
      label: 'CreatePublicationIssueAction',
      altLabel: 'Create Publication Issue Action',
      comment: 'The act of creating a publication issue.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateSpecialPublicationIssueAction',
      '@type': 'rdfs:Class',
      label: 'CreateSpecialPublicationIssueAction',
      altLabel: 'Create Special Publication Issue Action',
      comment: 'The act of creating a special publication issue.',
      subClassOf: ['sa:CreatePublicationIssueAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:SpecialPublicationIssue',
      '@type': 'rdfs:Class',
      label: 'SpecialPublicationIssue',
      altLabel: 'Special Publication Issue',
      comment: 'A special issue.',
      subClassOf: ['schema:PublicationIssue'],
      status: 'testing'
    },

    // Featured items
    // We used `schema:workFeatured` (from `Event`) on Periodical

    // Contact points
    // create custom classes for ContactPoint management as they have side effect with email validation
    {
      '@id': 'sa:CreateContactPointAction',
      '@type': 'rdfs:Class',
      label: 'CreateContactPointAction',
      altLabel: 'Create Contact Point Action',
      comment: 'The act of creating a contact point.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:UpdateContactPointAction',
      '@type': 'rdfs:Class',
      label: 'UpdateContactPointAction',
      altLabel: 'Update Contact Point Action',
      comment: 'The act of updating a contact point.',
      subClassOf: ['schema:UpdateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:AssignContactPointAction',
      '@type': 'rdfs:Class',
      label: 'AssignContactPointAction',
      altLabel: 'Assign Contact Point Action',
      comment: 'The act of assigning a contact point.',
      subClassOf: ['schema:AssignAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:UnassignContactPointAction',
      '@type': 'rdfs:Class',
      label: 'UnassignContactPointAction',
      altLabel: 'Unassign Contact Point Action',
      comment: 'The antonym of AssignContactPointAction.',
      subClassOf: ['sa:UnassignAction'],
      status: 'testing'
    },

    // Note we could evolve that into a `VerificationData` with a `verifiedProperty`, `verificationMethod`
    {
      '@id': 'sa:verificationStatus',
      '@type': 'rdf:Property',
      label: 'verificationStatus',
      comment:
        'The status of a contact point verification process (validating email etc.)',
      altLabel: 'verification status',
      range: 'sa:VerificationStatusType',
      domain: 'schema:ContactPoint',
      status: 'testing'
    },

    {
      '@id': 'sa:VerificationStatusType',
      '@type': 'rdfs:Class',
      comment:
        'The status of a contact point verification process (validating email etc.)',
      label: 'VerificationStatusType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:UnverifiedVerificationStatus',
      '@type': 'sa:VerificationStatusType',
      label: 'UnverifiedVerificationStatus',
      comment: 'Unverified contact point'
    },

    {
      '@id': 'sa:VerifiedVerificationStatus',
      '@type': 'sa:VerificationStatusType',
      label: 'VerifiedVerificationStatus',
      comment: 'Verified contact point'
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
      '@id': 'sa:DocumentProcessingAction',
      '@type': 'rdfs:Class',
      label: 'DocumentProcessingAction',
      altLabel: 'Document Processing Action',
      comment: 'The act of converting a document object to RDFa / JSON-LD.',
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
      '@id': 'sa:UnassignUrlAction',
      '@type': 'rdfs:Class',
      label: 'UnassignUrlAction',
      altLabel: 'Unassign URL Action',
      comment: 'The antonym of an AssignUrlAction',
      subClassOf: ['schema:UnassignAction'],
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

    // Payments & Billing
    {
      '@id': 'sa:CreatePaymentAccountAction',
      '@type': 'rdfs:Class',
      label: 'CreatePaymentAccountAction',
      altLabel: 'Create Payment Account Action',
      comment: 'The act of creating an account to process payments',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:CreateCustomerAccountAction',
      '@type': 'rdfs:Class',
      label: 'CreateCustomerAccountAction',
      altLabel: 'Create Customer Account Action',
      comment: 'The act of creating a customer account (for billing purposes)',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    // TODO remove ? (we use UpdateAction on the stripe customer or connect account)
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
      '@id': 'sa:customerAccountStatus',
      '@type': 'rdf:Property',
      label: 'customerAccountStatus',
      comment:
        'The status of a customer account in respect to its ability to be succesfully charged',
      altLabel: 'customer account status',
      range: 'sa:CustomerAccountStatusType',
      domain: 'schema:Organization',
      status: 'testing'
    },

    {
      '@id': 'sa:CustomerAccountStatusType',
      '@type': 'rdfs:Class',
      comment:
        'The status of a customer account in respect to its ability to be succesfully charged',
      label: 'CustomerAccountStatusType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:PendingCustomerAccountStatus',
      '@type': 'sa:CustomerAccountStatusType',
      label: 'PendingCustomerAccountStatus',
      comment: 'No account has been created yet or one is being created'
    },

    {
      '@id': 'sa:ValidCustomerAccountStatus',
      '@type': 'sa:CustomerAccountStatusType',
      label: 'ValidCustomerAccountStatus',
      comment: 'Account can be charged successfully'
    },

    {
      '@id': 'sa:InvalidCustomerAccountStatus',
      '@type': 'sa:CustomerAccountStatusType',
      label: 'InvalidCustomerAccountStatus',
      comment: 'Account cannot be charged successfully'
    },

    {
      '@id': 'sa:CanceledCustomerAccountStatus',
      '@type': 'sa:CustomerAccountStatusType',
      label: 'CanceledCustomerAccountStatus',
      comment: 'The account has been canceled'
    },

    // Roles
    {
      '@id': 'sa:ContributorRole',
      '@type': 'rdfs:Class',
      label: 'ContributorRole',
      altLabel: 'Contributor Role',
      comment: 'A subclass of Role used to describe contributor roles.',
      subClassOf: ['schema:Role'],
      status: 'testing'
    },

    {
      '@id': 'sa:AudienceRole',
      '@type': 'rdfs:Class',
      label: 'AudienceRole',
      altLabel: 'Audience Role',
      comment: 'A subclass of Role used to describe audience roles.',
      subClassOf: ['schema:Role'],
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

    // Times and dates
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
      range: 'schema:Date',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:stagedTime',
      '@type': 'rdf:Property',
      label: 'stagedTime',
      comment:
        'The time when the action was marked as staged (ready to be completed)',
      altLabel: 'staged time',
      range: 'schema:Date',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:endorsedTime',
      '@type': 'rdf:Property',
      label: 'endorsedTime',
      comment: 'The time when the action was endorsed',
      altLabel: 'endorsed time',
      range: 'schema:Date',
      domain: 'schema:Action',
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
      '@id': 'sa:dateSubmitted',
      '@type': 'rdf:Property',
      label: 'dateSubmitted',
      comment: 'The submission date',
      altLabel: 'date submitted',
      range: 'schema:Date',
      domain: 'sa:Graph',
      status: 'testing'
    },

    {
      '@id': 'sa:dateWithdrawn',
      '@type': 'rdf:Property',
      label: 'dateWithdrawn',
      comment: 'The withdraw date',
      altLabel: 'date withdrawn',
      range: 'schema:Date',
      domain: 'sa:Graph',
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

    // service, person and organization assets
    {
      '@id': 'sa:isLogoOf',
      '@type': 'rdf:Property',
      label: 'isLogoOf',
      altLabel: 'is logo of',
      comment: 'the thing this object is logo of',
      range: 'schema:Thing',
      domain: 'sa:MediaObject',
      status: 'testing'
    },

    {
      '@id': 'sa:isImageOf',
      '@type': 'rdf:Property',
      label: 'isImageOf',
      altLabel: 'is image of',
      comment: 'the thing this object is image of',
      range: 'schema:Thing',
      domain: 'sa:MediaObject',
      status: 'testing'
    },

    {
      '@id': 'sa:isAudioOf',
      '@type': 'rdf:Property',
      label: 'isAudioOf',
      altLabel: 'is audio of',
      comment: 'the thing this object is audio of',
      range: 'schema:Thing',
      domain: 'sa:MediaObject',
      status: 'testing'
    },

    {
      '@id': 'sa:isVideoOf',
      '@type': 'rdf:Property',
      label: 'isVideoOf',
      altLabel: 'is video of',
      comment: 'the thing this object is video of',
      range: 'schema:Thing',
      domain: 'sa:MediaObject',
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
    // Note: we use additionalType to point to the PublicationType from a Graph

    // PublicationTypeStatus
    {
      '@id': 'sa:publicationTypeStatus',
      '@type': 'rdf:Property',
      label: 'publicationTypeStatus',
      comment: 'The status of the publication type',
      altLabel: 'publicationType status',
      range: 'sa:PublicationTypeStatusType',
      domain: 'schema:PublicationType',
      status: 'testing'
    },

    {
      '@id': 'sa:PublicationTypeStatusType',
      '@type': 'rdfs:Class',
      comment: 'The status of a Workflow.',
      label: 'PublicationTypeStatusType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:ActivePublicationTypeStatus',
      '@type': 'sa:PublicationTypeStatusType',
      label: 'ActivePublicationTypeStatus',
      comment: 'A workflow specification currently activated'
    },

    {
      '@id': 'sa:DeactivatedPublicationTypeStatus',
      '@type': 'sa:PublicationTypeStatusType',
      label: 'DeactivatedPublicationTypeStatus',
      comment: 'A workflow specification currently deactivated'
    },

    {
      '@id': 'sa:ArchivedPublicationTypeStatus',
      '@type': 'sa:PublicationTypeStatusType',
      label: 'ArchivedPublicationTypeStatus',
      comment: 'An archived workflow specification '
    },

    {
      '@id': 'sa:objectSpecification',
      '@type': 'rdf:Property',
      label: 'objectSpecification',
      altLabel: 'object specification',
      comment:
        'Specification defining the resources associated with the publication type',
      range: 'schema:CreativeWork',
      domain: 'sa:PublicationType',
      source: 'https://github.com/scienceai/librarian/issues/145',
      status: 'testing'
    },

    // Note: we use additionalType to point to the PublicationType from a Graph
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

    // This is used to define article section inline when specifying the `objectSpecification`
    {
      '@id': 'sa:PublicationElementType',
      '@type': 'rdfs:Class',
      label: 'PublicationElementType',
      comment: 'A type of publication element',
      subClassOf: 'schema:Enumeration',
      status: 'testing',
      source: 'https://github.com/scienceai/librarian/issues/145'
    },

    // Service status
    {
      '@id': 'sa:serviceStatus',
      '@type': 'rdf:Property',
      label: 'serviceStatus',
      comment: 'The status of the service',
      altLabel: 'service status',
      range: 'sa:ServiceStatusType',
      domain: 'schema:Service',
      status: 'testing'
    },

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
    },

    {
      '@id': 'sa:ArchivedServiceStatus',
      '@type': 'sa:ServiceStatusType',
      label: 'ArchivedServiceStatus',
      comment: 'A service currently archived'
    },

    // Workflow
    {
      '@id': 'sa:CreateWorkflowSpecificationAction',
      '@type': 'rdfs:Class',
      label: 'CreateWorkflowSpecificationAction',
      altLabel: 'Create Workflow Specification Action',
      comment: 'The act of creating a workflow specification.',
      subClassOf: ['schema:CreateAction'],
      status: 'testing'
    },

    {
      '@id': 'sa:workflow',
      '@type': 'rdf:Property',
      label: 'workflow',
      comment:
        'A workflow such an editorial process related responsible for the production of the creative work',
      altLabel: 'workflow',
      range: 'sa:WorkflowSpecification',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },

    {
      '@id': 'sa:potentialWorkflow',
      '@type': 'rdf:Property',
      label: 'potentialWorkflow',
      comment: 'potential workflow',
      altLabel: 'workflow',
      range: 'sa:WorkflowSpecification',
      domain: 'schema:CreativeWork',
      status: 'testing'
    },

    // reverse prop for convenience
    {
      '@id': 'sa:isPotentialWorkflowOf',
      '@type': 'rdf:Property',
      label: 'isPotentialWorkflowOf',
      comment:
        'The creative work for which this workflow is a potential workflow',
      altLabel: 'is workflow of',
      range: 'schema:CreativeWork',
      domain: 'sa:WorkflowSpecification',
      status: 'testing'
    },

    {
      '@id': 'sa:isPublicationTypeOf',
      '@type': 'rdf:Property',
      label: 'isPublicationTypeOf',
      comment: 'The periodical for which this type is a publication type',
      altLabel: 'is workflow of',
      range: 'schema:Periodical',
      domain: 'sa:PublicationType',
      status: 'testing'
    },

    {
      '@id': 'sa:WorkflowSpecification',
      '@type': 'rdfs:Class',
      label: 'WorkflowSpecification',
      altLabel: 'Workflow Specification',
      comment: 'A workflow specification',
      subClassOf: ['schema:CreativeWork'],
      status: 'testing'
    },

    {
      '@id': 'sa:workflowSpecificationStatus',
      '@type': 'rdf:Property',
      label: 'workflowSpecificationStatus',
      comment: 'The status of the workflow specification',
      altLabel: 'workflow status specification',
      range: 'sa:WorkflowSpecificationStatusType',
      domain: 'sa:WorkflowSpecification',
      status: 'testing'
    },

    {
      '@id': 'sa:WorkflowSpecificationStatusType',
      '@type': 'rdfs:Class',
      comment: 'The status of a Workflow.',
      label: 'WorkflowSpecificationStatusType',
      subClassOf: ['schema:Enumeration']
    },

    {
      '@id': 'sa:ActiveWorkflowSpecificationStatus',
      '@type': 'sa:WorkflowSpecificationStatusType',
      label: 'ActiveWorkflowSpecificationStatus',
      comment: 'A workflow specification currently activated'
    },

    {
      '@id': 'sa:DeactivatedWorkflowSpecificationStatus',
      '@type': 'sa:WorkflowSpecificationStatusType',
      label: 'DeactivatedWorkflowSpecificationStatus',
      comment: 'A workflow specification currently deactivated'
    },

    {
      '@id': 'sa:ArchivedWorkflowSpecificationStatus',
      '@type': 'sa:WorkflowSpecificationStatusType',
      label: 'ArchivedWorkflowSpecificationStatus',
      comment: 'An archived workflow specification '
    },

    // pointers

    {
      '@id': 'sa:requiresCompletionOf',
      '@type': 'rdf:Property',
      label: 'requiresCompletionOf',
      altLabel: 'requires completion of',
      comment:
        'An action, or list of actions, whose completion is required for the completion of this action',
      range: 'schema:Action',
      domain: 'schema:Action',
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

    {
      '@id': 'sa:instanceOf',
      '@type': 'rdf:Property',
      label: 'resultOf',
      comment: 'The template which resulted in this Thing',
      altLabel: 'result of',
      range: 'schema:Action',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:instrumentOf',
      '@type': 'rdf:Property',
      label: 'instrumentOf',
      comment: 'The reverse property of instrument',
      altLabel: 'instrument of',
      range: 'schema:Action',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:serviceOutputOf',
      '@type': 'rdf:Property',
      label: 'serviceOutputOf',
      comment: 'The reverse property of serviceOutput',
      altLabel: 'service output of',
      range: 'schema:Service',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:potentialResult',
      '@type': 'rdf:Property',
      label: 'potentialResult',
      comment:
        'One or several potential results that can be produced by the action',
      altLabel: 'potential result',
      range: 'schema:Thing',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:potentialService',
      '@type': 'rdf:Property',
      label: 'potentialService',
      comment:
        'One or several service made available to the agent of the action',
      altLabel: 'potential result',
      range: 'schema:Service',
      domain: 'schema:Action',
      subPropertyOf: 'schema:instrument',
      status: 'testing'
    },

    // Endorsements (EndorseAction is in schema.org)
    {
      '@id': 'sa:StagedActionStatus',
      '@type': 'schema:ActionStatus',
      label: 'StagedActionStatus',
      comment: 'An action ready to be completed'
    },

    {
      '@id': 'sa:EndorsedActionStatus',
      '@type': 'schema:ActionStatus',
      label: 'EndorsedActionStatus',
      comment: 'An endorsed action'
    },

    {
      '@id': 'sa:CanceledActionStatus',
      '@type': 'schema:ActionStatus',
      label: 'CanceledActionStatus',
      comment: 'An action that has been canceled'
    },

    // Triggers
    {
      '@id': 'sa:activateOn',
      '@type': 'rdf:Property',
      label: 'activateOn',
      comment:
        'A trigger indicating when the actionStatus property should be set to ActivateActionStatus',
      altLabel: 'activate on',
      range: 'schema:TriggerType',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:endorseOn',
      '@type': 'rdf:Property',
      label: 'endorseOn',
      comment:
        'A trigger indicating when the actionStatus property should be set to EndorsedActionStatus',
      altLabel: 'complete on',
      range: 'schema:TriggerType',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:completeOn',
      '@type': 'rdf:Property',
      label: 'completeOn',
      comment:
        'A trigger indicating when the actionStatus property should be set to CompletedActionStatus',
      altLabel: 'complete on',
      range: 'schema:TriggerType',
      domain: 'schema:Action',
      status: 'testing'
    },

    {
      '@id': 'sa:valueRequiredOn',
      '@type': 'rdf:Property',
      label: 'valueRequiredOn',
      comment: 'A trigger indicating when a value should be required',
      altLabel: 'value required on',
      range: 'sa:TriggerType',
      domain: 'schema:PropertyValueSpecification',
      status: 'testing'
    },

    {
      '@id': 'sa:TriggerType',
      '@type': 'rdfs:Class',
      label: 'TriggerType',
      comment: 'A type of trigger',
      subClassOf: 'schema:Enumeration',
      status: 'testing'
    },

    {
      '@id': 'sa:OnObjectActiveActionStatus',
      '@type': 'sa:TriggerType',
      label: 'OnObjectActiveActionStatus',
      comment:
        'A trigger activated when the action object is set to ActiveActionStatus'
    },

    {
      '@id': 'sa:OnObjectStagedActionStatus',
      '@type': 'sa:TriggerType',
      label: 'OnObjectStagedActionStatus',
      comment:
        'A trigger activated when the action object is set to StagedActionStatus or CompletedActionStatus from ActiveActionStatus, PotentialActionStatus or, FailedActionStatus'
    },

    {
      '@id': 'sa:OnObjectCompletedActionStatus',
      '@type': 'sa:TriggerType',
      label: 'OnObjectCompletedActionStatus',
      comment:
        'A trigger activated when the action object is set to CompletedActionStatus'
    },

    {
      '@id': 'sa:OnObjectFailedActionStatus',
      '@type': 'sa:TriggerType',
      label: 'OnObjectFailedActionStatus',
      comment:
        'A trigger activated when the action object is set to FailedActionStatus'
    },

    {
      '@id': 'sa:OnWorkflowStageEnd',
      '@type': 'sa:TriggerType',
      label: 'OnWorkflowStageEnd',
      comment:
        'A trigger activated when the workflow stage associated with the action ends'
    },

    {
      '@id': 'sa:OnPublicationAccepted',
      '@type': 'sa:TriggerType',
      label: 'OnPublicationAccepted',
      comment: 'A trigger activated when a publication is accepted'
    },

    {
      '@id': 'sa:OnWorkerEnd',
      '@type': 'sa:TriggerType',
      label: 'OnWorkerEnd',
      comment: 'A trigger activated when a worker ends'
    },

    {
      '@id': 'sa:OnEndorsed',
      '@type': 'sa:TriggerType',
      label: 'OnEndorsed',
      comment: 'A trigger activated when the action is endorsed'
    },

    {
      '@id': 'sa:OnChargeSucceeded',
      '@type': 'sa:TriggerType',
      label: 'OnChargeSucceeded',
      comment:
        'A trigger activated when a payment charge associated with the action has succeded'
    },

    // Update
    {
      '@id': 'sa:ifMatch',
      '@type': 'rdf:Property',
      label: 'ifMatch',
      comment: 'The _rev value of the scope',
      altLabel: 'if  match',
      range: 'schema:Text',
      domain: 'schema:UpdateAction',
      status: 'testing'
    },

    // Merge strategies
    {
      '@id': 'sa:mergeStrategy',
      '@type': 'rdf:Property',
      label: 'mergeStrategy',
      comment: 'A merge strategy',
      altLabel: 'merge strategy',
      range: 'sa:MergeStrategyType',
      domain: 'schema:UpdateAction',
      status: 'testing'
    },

    {
      '@id': 'sa:MergeStrategyType',
      '@type': 'rdfs:Class',
      label: 'MergeStrategyType',
      comment: 'A type of merge strategy',
      subClassOf: 'schema:Enumeration',
      status: 'testing'
    },

    {
      '@id': 'sa:ReconcileMergeStrategy',
      '@type': 'sa:MergeStrategyType',
      label: 'UpsertMergeStrategy',
      comment:
        'Update or create a resource, reconciliating the nodes part of the object payload and letting the other nodes untouched'
    },

    {
      '@id': 'sa:OverwriteMergeStrategy',
      '@type': 'sa:MergeStrategyType',
      label: 'OverwriteMergeStrategy',
      comment:
        'Update or create a resource, overwriting the values with the one of the update payload'
    }
  ]
};
