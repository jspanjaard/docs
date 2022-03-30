(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{411:function(e,t,o){"use strict";o.r(t);var n=o(56),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"core-concepts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#core-concepts"}},[e._v("#")]),e._v(" Core concepts")]),e._v(" "),o("p",[o("strong",[e._v("alis.exchange")]),e._v(" has a collection of resources that follow the best practices of resource-oriented design.\nThese resources are used to elegantly integrate cloud technologies that make up the "),o("strong",[e._v("alis.exhange")]),e._v(" platform. The three most important resources are depicted in the image below.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/alis-x/alis.exchange-docs/b55a1be67aa4a45d1807cbc9b09e9e5a87efd89e/assets/images/resourceHierarchy.svg",alt:""}})]),e._v(" "),o("p",[e._v("The three major resources can be communicated together as an "),o("code",[e._v("organisation")]),e._v(" having one or more "),o("code",[e._v("product")]),e._v(",\nconsisting of one or more "),o("code",[e._v("neuron")]),e._v(". Additionally, "),o("code",[e._v("products")]),e._v(" have "),o("code",[e._v("deployments")]),e._v(", which consists of all, or a subset, of the\n"),o("code",[e._v("neurons")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"organisation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#organisation"}},[e._v("#")]),e._v(" Organisation")]),e._v(" "),o("p",[e._v("An "),o("code",[e._v("organisation")]),e._v(" resource represents the top-level resource on "),o("strong",[e._v("alis.exchange")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Conceptually")]),e._v(", all "),o("code",[e._v("products")]),e._v(" built on the exchange belong to a specific "),o("code",[e._v("organisation")]),e._v(".")]),e._v(" "),o("li",[o("em",[e._v("Practically")]),e._v(", an "),o("code",[e._v("organisation")]),e._v(":\n"),o("ul",[o("li",[e._v("Is responsible for billing.")]),e._v(" "),o("li",[e._v("Owns and manages users in the organisation along with access management.")]),e._v(" "),o("li",[e._v("Has a monorepo in which all resource and service definitions well as infrastructure specification contained.")])])])]),e._v(" "),o("h2",{attrs:{id:"product"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#product"}},[e._v("#")]),e._v(" Product")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("product")]),e._v(" resource represents a digital product built on "),o("strong",[e._v("alis.exchange")]),e._v(". The majority of these adopt an API-first strategy.")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Conceptually")]),e._v(", a "),o("code",[e._v("product")]),e._v(" is the thing which is offered to the world, whether for usage within an "),o("code",[e._v("organisation")]),e._v(" or\nas a B2B/B2C product.")]),e._v(" "),o("li",[o("em",[e._v("Practically")]),e._v(", the "),o("code",[e._v("product")]),e._v(":\n"),o("ul",[o("li",[e._v("Has its own Google Cloud project.")]),e._v(" "),o("li",[e._v("Has a repo in which the source code for the "),o("code",[e._v("product")]),e._v(" is contained.")]),e._v(" "),o("li",[e._v("Consists of a group of developers.")]),e._v(" "),o("li",[e._v("Can have one or more deployments of the "),o("code",[e._v("product")]),e._v(".")]),e._v(" "),o("li",[e._v("Manages access to the deployments of the "),o("code",[e._v("product")]),e._v(". This may be on an individual or group level.")]),e._v(" "),o("li",[e._v("Will specify the various APIs and infrastructure required by the children "),o("code",[e._v("neurons")]),e._v(" through using "),o("a",{attrs:{href:"https://www.terraform.io/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("p",[e._v("Example "),o("code",[e._v("products")]),e._v(" on alis.exchange built by "),o("a",{attrs:{href:"https://alis.capital",target:"_blank"}},[e._v("alis")]),e._v(" include:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("DE")]),e._v(": "),o("em",[e._v("Data Engineering")]),e._v(", responsible for synchronising data from external sources.")]),e._v(" "),o("li",[o("code",[e._v("CP")]),e._v(": "),o("em",[e._v("Compliance")]),e._v(", a fast and flexible framework for accurate portfolio compliance at scale.")])]),e._v(" "),o("p",[e._v("Furthermore, "),o("strong",[e._v("alis.exchange")]),e._v(" itself is a product, "),o("code",[e._v("EX")]),e._v(", which delivers its value through leveraging other products\nsuch as "),o("code",[e._v("OS")]),e._v(", the "),o("em",[e._v("operating system")]),e._v(" facilitating all the resource "),o("strong",[e._v("alis.exchange")]),e._v(" resource management; and "),o("code",[e._v("CL")]),e._v(", the\n"),o("em",[e._v("command-line interface")]),e._v(" which provides a means to interact with "),o("code",[e._v("OS")]),e._v(" from your terminal.")]),e._v(" "),o("h2",{attrs:{id:"neuron"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neuron"}},[e._v("#")]),e._v(" Neuron")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("neuron")]),e._v(" resource represents the "),o("em",[e._v("unit of compute")]),e._v(" used by the parent "),o("code",[e._v("product")]),e._v(". Each "),o("code",[e._v("neuron")]),e._v(" is either a\n"),o("em",[e._v("resource")]),e._v(" type or a "),o("em",[e._v("service")]),e._v(" type. The collection of "),o("code",[e._v("neurons")]),e._v(" in a "),o("code",[e._v("product")]),e._v(" - ie. the resources,\n"),o("a",{attrs:{href:"https://cloud.google.com/apis/design/standard_methods#:~:text=This%20chapter%20defines%20the%20concept%20of%20standard%20methods%2C%20which%20are%20List%2C%20Get%2C%20Create%2C%20Update%2C%20and%20Delete",target:"_blank"}},[e._v("\nmethods on the resources")]),e._v(" and the services (typically following "),o("a",{attrs:{href:"https://cloud.google.com/apis/design/custom_methods",target:"_blank"}},[e._v("\ncustom methods")]),e._v(") - provide all the functionality that a "),o("code",[e._v("product")]),e._v(" requires to provide its offering.")]),e._v(" "),o("h2",{attrs:{id:"deployments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployments"}},[e._v("#")]),e._v(" Deployments")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("deployment")]),e._v(" refers to an operational instance of a "),o("code",[e._v("product")]),e._v(" on the cloud which clients would interact with. Under the hood this consists of both\n"),o("code",[e._v("product deployments")]),e._v(" and "),o("code",[e._v("neuron deployments")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"product-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#product-deployment"}},[e._v("#")]),e._v(" Product deployment")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("product deployment")]),e._v(" refers to the hardware infrastructure aspect of the product. As explained in the\n"),o("a",{attrs:{href:"https://github.com/alis-x/initial-user-onboarding/blob/master/ExchangeConcepts.md#product",target:"_blank",rel:"noopener noreferrer"}},[e._v("product section"),o("OutboundLink")],1),e._v(", the\norganisation's "),o("code",[e._v("proto")]),e._v(" repository contains a directory for each product, in which the infrastructure requirements used\nwithin the neurons are specified.")]),e._v(" "),o("p",[e._v("Before "),o("em",[e._v("deploying")]),e._v(" a "),o("code",[e._v("product")]),e._v(", it first needs to be "),o("em",[e._v("built")]),e._v(" (see "),o("code",[e._v("alis product build -h")]),e._v("), which increments the\nsemantic versioning and applies the "),o("strong",[e._v("product level")]),e._v(" (ie. not those within the "),o("code",[e._v("neurons")]),e._v(") Terraform specification\nwithin the "),o("code",[e._v("product")]),e._v(" Google Cloud project.")]),e._v(" "),o("p",[e._v("When a "),o("code",[e._v("product")]),e._v(" is "),o("em",[e._v("deployed")]),e._v(" (see "),o("code",[e._v("alis product deploy -h")]),e._v("), the "),o("strong",[e._v("product level")]),e._v(" (ie. not those within the "),o("code",[e._v("neurons")]),e._v(")\nTerraform files are used to apply the infrastructure specification, the end "),o("code",[e._v("product")]),e._v(" being the deployment environment\nreflecting the specification in the "),o("code",[e._v("*.tf")]),e._v(" files. Once deployed, each "),o("code",[e._v("product deployment")]),e._v(" has its own "),o("em",[e._v("Google Cloud\nproject")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"neuron-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neuron-deployment"}},[e._v("#")]),e._v(" Neuron deployment")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("neuron deployment")]),e._v(" refers to a specific version of a "),o("code",[e._v("neuron")]),e._v(" that is operational within a specific "),o("code",[e._v("product deployment")]),e._v(",\nthereby being a "),o("em",[e._v("child resource")]),e._v(" of a "),o("code",[e._v("product deployment")]),e._v(".")]),e._v(" "),o("p",[e._v("Before "),o("em",[e._v("deploying")]),e._v(" a "),o("code",[e._v("neuron")]),e._v(", it first needs to be "),o("em",[e._v("built")]),e._v(" (see "),o("code",[e._v("alis neuron build -h")]),e._v("). During the build process,\nthe semantic versioning is incremented and deployment package is created from the source code and the Terraform specification:")]),e._v(" "),o("ol",[o("li",[e._v("The hash of the latest commit is captured such as to have a snapshot of the Terraform specification at the\npoint in time the "),o("code",[e._v("build")]),e._v(" was called.")]),e._v(" "),o("li",[e._v("The Dockerfile(s) in the "),o("code",[e._v("neuron")]),e._v(" repo is executed on "),o("em",[o("a",{attrs:{href:"https://cloud.google.com/build",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Build"),o("OutboundLink")],1)]),e._v(" to build the\nimages from the "),o("code",[e._v("neuron")]),e._v(" source code, which is stored in the "),o("em",[o("a",{attrs:{href:"https://cloud.google.com/artifact-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Artifact Registry"),o("OutboundLink")],1)]),e._v(".")])]),e._v(" "),o("p",[e._v("When the "),o("code",[e._v("neuron")]),e._v(" is "),o("em",[e._v("deployed")]),e._v(" to a specific "),o("code",[e._v("product deployment")]),e._v(" (see "),o("code",[e._v("alis neuron deploy -h")]),e._v("), the "),o("code",[e._v("neuron")]),e._v(" level\nTerraform specification is applied in the "),o("em",[e._v("Google Cloud project")]),e._v(" of the respective "),o("code",[e._v("product deployment")]),e._v(". This\nspecification will typically contain services which point to the image in the artifact registry that was built when\nrunning "),o("code",[e._v("alis neuron build ...")]),e._v(".")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("product deployment")]),e._v(" may consist of all the "),o("code",[e._v("neurons")]),e._v(" within a "),o("code",[e._v("product")]),e._v(" or a subset thereof. Three common patterns\nhave emerged from builders on "),o("strong",[e._v("alis.exchange")]),e._v(" which are discussed in the following section.")]),e._v(" "),o("h3",{attrs:{id:"common-deployment-patterns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-deployment-patterns"}},[e._v("#")]),e._v(" Common deployment patterns")]),e._v(" "),o("p",[e._v("To demonstrate the three most typical deployment patterns, consider the example, depicted in the image, of a "),o("code",[e._v("product")]),e._v("\nconsisting of three "),o("code",[e._v("neurons")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/alis-x/alis.exchange-docs/b55a1be67aa4a45d1807cbc9b09e9e5a87efd89e/assets/images/ExchangeConceptsProductNeuron.svg",alt:""}})]),e._v(" "),o("h3",{attrs:{id:"pattern-1-full-product-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pattern-1-full-product-deployment"}},[e._v("#")]),e._v(" Pattern 1: Full product deployment")]),e._v(" "),o("p",[e._v("The first pattern is where a "),o("code",[e._v("product")]),e._v(" is deployed having all the "),o("code",[e._v("neurons")]),e._v(". This is typically used where a "),o("code",[e._v("product")]),e._v(" provided\nto clients is required to have all the functionality across all the "),o("code",[e._v("neurons")]),e._v(" and be independent of other "),o("code",[e._v("neuron deployments")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/alis-x/alis.exchange-docs/b55a1be67aa4a45d1807cbc9b09e9e5a87efd89e/assets/images/ExchangeConceptsProductNeuronPattern1.svg",alt:""}})]),e._v(" "),o("h3",{attrs:{id:"pattern-2-limited-features-product-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pattern-2-limited-features-product-deployment"}},[e._v("#")]),e._v(" Pattern 2: Limited features product deployment")]),e._v(" "),o("p",[e._v("The second pattern is where a "),o("code",[e._v("product")]),e._v(" is deployed having a subset of "),o("code",[e._v("neurons")]),e._v(". This is typically used where a "),o("code",[e._v("product")]),e._v("\nmay have a range of features that may individually be purchased by clients and therefore want to limit those available\nin a given "),o("code",[e._v("product deployment")]),e._v(".")]),e._v(" "),o("p",[e._v("The image depicts an example where two clients have access to two different "),o("code",[e._v("product deployments")]),e._v(". The "),o("code",[e._v("product")]),e._v(" having the\ncore functionality as part of "),o("code",[e._v("Neuron 1")]),e._v(" and additional features being available with the other "),o("code",[e._v("neurons")]),e._v(". In the first case,\nthe client would have the functionality provided by the core "),o("code",[e._v("Neuron 1")]),e._v(" and the extended functionality of "),o("code",[e._v("Neuron 2")]),e._v(".\nIn the second case, the client would have the functionality provided by the core "),o("code",[e._v("Neuron 1")]),e._v(" and the extended\nfunctionality of "),o("code",[e._v("Neuron 3")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/alis-x/alis.exchange-docs/b55a1be67aa4a45d1807cbc9b09e9e5a87efd89e/assets/images/ExchangeConceptsProductNeuronPattern2.svg",alt:""}})]),e._v(" "),o("h3",{attrs:{id:"pattern-3-interdependent-neurons-product-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pattern-3-interdependent-neurons-product-deployment"}},[e._v("#")]),e._v(" Pattern 3: Interdependent neurons product deployment")]),e._v(" "),o("p",[e._v("The final pattern is where multiple "),o("code",[e._v("product deployments")]),e._v(" may have the need to access a single "),o("code",[e._v("neuron")]),e._v(" version. This\nmay be due to various use cases including:")]),e._v(" "),o("ul",[o("li",[e._v("The shared "),o("code",[e._v("neuron")]),e._v(" containing a common data set that all "),o("code",[e._v("product deployements")]),e._v(" are dependent on."),o("br"),e._v(" "),o("em",[e._v("Example")]),e._v(": A common set of core financial instrument resources.")]),e._v(" "),o("li",[e._v("Architecturally, deciding to use a single Google Cloud product instance to perform the logic of the neuron."),o("br"),e._v(" "),o("em",[e._v("Example")]),e._v(": A "),o("a",{attrs:{href:"https://cloud.google.com/bigtable/docs/overview",targer:"_blank"}},[e._v("Cloud BigTable")]),e._v(" instance\nthat is shared by other services to store information. "),o("br"),e._v("\nThe reasoning being that each BigTable instance is billed.\nTherefore, using a single, shared instance with tight access control provides the same functionality but at a much\nlower cost.")])]),e._v(" "),o("p",[e._v("The image depicts an example where "),o("code",[e._v("neuron deployments")]),e._v(" of multiple "),o("code",[e._v("product deployments")]),e._v(" make use of an individual,\nshared "),o("code",[e._v("neuron deployment")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/alis-x/alis.exchange-docs/b55a1be67aa4a45d1807cbc9b09e9e5a87efd89e/assets/images/ExchangeConceptsProductNeuronPattern3.svg",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);