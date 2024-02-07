const chippo = `<html>

<head>


<link rel="stylesheet" href="https://oztix.s3.amazonaws.com/outlet_additional_files/2018-Algolia/algolia_events.css" />

<script type="text/javascript">

	// Exclude Event Filtering Instructions 

	// Copy and paste the event GUID from the event URL

	// all GUIDs must go inside the square brackets

	// each GUID must be inside double quotes

	// to exclude events each GUID must have a hyphen at the begining without any spaces

	// each GUID must be comma seperated

	// see the following example for reference

	// const event_filter=["-ca91a3a7-237f-482b-a394-c8daf3d54e87","-49d16b9b-e87b-4be7-9387-4012dfbcb208","-4e0e3f23-dcd5-435e-bda7-87e25aaba49e"]

	

	const event_filter=''



	// Venue Filtering Instructions

	// venue filters must use the exact spelling of the venue name as seen on the oztix purchase page.

	// the entire list of venues must be contained inside single quotes

	// each entry must being with Venue.Name:

	// each venue must be contained inside double quotes

	// each venue must be seperated by OR

	// see the following example for reference

	// const venue_filter='Venue.Name:"Waywards (The Bank Hotel)" OR Venue.Name:"Paddo Lounge (Paddington RSL)"'



	const venue_filter='Venue.Name:"The Chippo Hotel"'

</script>



<!-- un-comment the below block to remove the search bar from the top of the page -->

<!-- <style type="text/css">

	.ais-search-box {display:none;}

</style> -->





<!-- un-comment the below block to remove the refinement section on the left of page -->

<!-- <style type="text/css">

	.filter-wrap {display:none;}

	.event-wrap {width:100% !important;}

</style> -->





</head>



<body>

<!-- START ALGOLIA -->

  <div class="algolia-search"> 

    <script src="//cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.js"></script> 

    <script src="//www.oztix.com.au/js/moment.min.js"></script> 

    <script src="//www.oztix.com.au/js/moment-timezone-with-data.min.js"></script>

    <input id="eventsearchbar" name="q" placeholder="Search for events" style="width: 100%;" />

    <div class="entries">

      <div class="container-fluid">

        <div class="row">

          <div class="col-md-3 filter-wrap">

            <aside class="event-guide-filter">

              <div id="clear-all"></div>

              <section class="facet-wrapper">

                <div class="facet-category-title">Refine by</div>

                <!-- comment out the below line to remove STATE from the refine by section -->

                <!-- <div id="state" class="facet"></div> -->

                <!-- comment out the below line to remove VENUE from the refine by section -->

                <!-- <div id="venue" class="facet"></div> -->

                <!-- comment out the below line to remove BAND from the refine by section -->

                <div id="band" class="facet"></div>

                <!-- comment out the below line to remove TOUR from the refine by section -->

                <!-- <div id="eventtour" class="facet"></div> -->

                <!-- comment out the below line to remove CATEGORIES from the refine by section -->

                <div id="categories" class="facet"></div>

              </section>

            </aside>

          </div>

          <div class="col-md-9 event-wrap">

            <div class="results-wrapper">

              <main id="event-guide-hits" class="clearfix">

                <div class="row"></div>

              </main>

              <section id="pagination"></section>

            </div>

          </div>

        </div>

      </div>

    </div>

    <!--/.entries-->

    <!-- DO NOT CHANGE BELOW BLOCK-->

    <script>

        var search = instantsearch({

            appId: 'ICGFYQWGTD',

			apiKey: '97457c1510bf43f21279078b2c848ef1',

			indexName: 'prod_oztix_eventguide',

            numberLocale: 'en-US',

            urlSync: {

                useHash: false,

                trackedParameters: ['']

			},

            searchParameters: {

				filters:venue_filter,

				facetsRefinements:{

					'EventGuid': event_filter, // this is changed at the top of HTML using the const event_filter

					// 'Venue.State': ["QLD"], // // display event results for a single specific state

					// 'EventGuid': ["-ec211d12-2592-43ee-959f-3de12f6a1417","-58ca57b4-0b41-4828-8f07-3563f7b11292"],	// -- hide 1 or more events from your feed using a hypen then the event GUID copied from the URL of the required event.

                	// IsCancelled: [true], // // show or hide events that are cancelled with true or false

			        // IsPostponed: [true], // // show or hide events that are postponed with true or false

                    // IsRescheduled: [true], // // show or hide events that are rescheduled with true or false

                    },

				disjunctiveFacetsRefinements:{ 

					// 'Categories': ["Blues","Punk","Grunge","Rock","Alternative","Indie"], // // display event results for multiple specific categories using comma seperated exact category names

					// 'Venue.State': ["QLD","NSW"], // // display event results for multiple specific states using comma seperated state abbreviations

					},

				},

		});



// if the search bar is not required please remove the below block

	search.addWidget(

		instantsearch.widgets.searchBox({

			container: '#eventsearchbar',

			placeholder: 'Search for events',

			autofocus: false,

			poweredBy: false,

			searchOnEnterKeyPressOnly: false

		})

	);



	var hitTemplate =

		'<article class="hit">' +

		'<a href="{{EventUrl}}"  target="_blank" class="clearfix">' +

		'<div class="product-picture-wrapper no-pad-left col-xs-4 col-sm-12">' +

		'<div class="product-picture"><img src="{{EventImage1}}" alt="{{EventNameClean}}" /></div>' +

		'<div class="event-date-mobile visible-xs"><span class="day">{{DateStartPart.Day}}</span> <span class="date">{{DateStartPart.Date}}</span> <span class="month">{{DateStartPart.Month}}</span></div>' +

		'</div>' +

		'<div class="product-desc-wrapper no-pad-left col-xs-7 col-sm-12">' +

		'<div class="product-desc-container clearfix">' +

		'<div class="product-date no-pad-left hidden-xs col-sm-2 col-md-3 col-lg-2">' +

		'<div class="product-date-container">' +

		'<span class="day">{{DateStartPart.Day}}</span>' +

		'<span class="date">{{DateStartPart.Date}}</span>' +

		'<span class="month">{{DateStartPart.Month}}</span>' +

		'</div>' +

		'</div>' +

		'<div class="product-desc col-sm-10 col-md-9 col-lg-10 no-pad-left">' +

		'<div class="event-details">' +

		'<span class="product-name">{{{_highlightResult.EventName.value}}}</span>' +

        '<span class="product-type">{{{SpecialGuests}}}</span>' +

        // '<span class="product-type">{{{_highlightResult.Venue.Name.value}}}</span>' +

		// '<span class="product-city hidden-xs">{{{Venue.Locality}}}</span>' +

		'</div>' +

		'</div>' +

		'</div>' +

		'</div>' +

		'<div class="event-arrow no-pad col-xs-1 visible-xs"><em class="fa fa-angle-right"></em></div>' +

		'</a>' +

		'</article>';



	var noResultsTemplate =

		'<div class="no-results text-center">There are currently no results found matching <strong>{{query}}</strong>.</div>';



	var menuTemplate =

		'<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><em class="fa fa-angle-right"></em>  {{name}}</span class="facet-name"></a>';



	var facetTemplateCheckbox =

		'<a href="javascript:void(0);" class="facet-item">' +

		'<input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}' +

		'</a>';



	var facetTemplateColors =

		'<a href="javascript:void(0);" data-facet-value="{{name}}" class="facet-color {{#isRefined}}checked{{/isRefined}}"></a>';

	



			

// This controls the event container display size and number of events that display per page.

// If you require 5 event only change hitsPerPage to the value of 5.

// Note you must increase the hitsPerPage value to allow all events to display on one page if you remove PAGINATION.

	search.addWidget(

		instantsearch.widgets.hits({

			container: '#event-guide-hits',

			cssClasses: {

                item: 'event-container col-xs-12 col-sm-6',

			},

			hitsPerPage: 20,

			templates: {

				empty: noResultsTemplate,

				item: hitTemplate

			},

			transformData: {

				item: function(hit) {

					hit.DateStartPart = {};

					hit.DateStartPart.Day = moment.tz(hit.DateStart, 'UTC').tz(hit.Venue.Timezone).format("ddd");

					hit.DateStartPart.Date = moment.tz(hit.DateStart, 'UTC').tz(hit.Venue.Timezone).format("DD");

					hit.DateStartPart.Month = moment.tz(hit.DateStart, 'UTC').tz(hit.Venue.Timezone).format("MMM");

					hit.DateStartPart.Year = moment.tz(hit.DateStart, 'UTC').tz(hit.Venue.Timezone).format("YYYY");

					hit.EventNameClean = hit.EventName.replace(/[^a-z0-9]/gi, '');

					let url = new URL(hit.EventUrl)

					let params = new URLSearchParams(url.search)

						params.set('utm_source', 'MusicAndBooze-TheChippoHotel')

						params.set('utm_medium', 'eventFeed')

						url.search = params.toString()

					return {...hit, EventUrl: url.toString() }

				}

			}

		})

	);

// This controls pagination - if you require all events to display on a single page comment it out.

// Note you must increase the hitsPerPage value to allow all events to display in the block above.

	search.addWidget(

		instantsearch.widgets.pagination({

			container: '#pagination',

			cssClasses: {

				active: 'active'

			},

			labels: {

				previous: '<em class="fa fa-angle-left"></em>',

				next: '<em class="fa fa-angle-right"></em>'

			},

			showFirstLast: false

		})

	);



// Comment out the below block to remove STATE as a refinement option.

// Please also comment out the div futher up that points to STATE.

	// search.addWidget(

	// 	instantsearch.widgets.refinementList({

	// 		container: '#state',

	// 		attributeName: 'Venue.State',

	// 		operator: 'or',

	// 		/*collapsible: {

	// 			collapsed: true,

	// 		},*/ // toggles the expand to display options function.

	// 		cssClasses: {

	// 			active: 'active'

	// 		},

	// 		templates: {

	// 			item: facetTemplateCheckbox,

	// 			header: '<div class="facet-title"><span>State</span></div">'

	// 		}

	// 	})

	// );



// Comment out the below block to remove VENUE as a refinement option.

// Please also comment out the div futher up that points to VENUE.

	// search.addWidget(

	// 	instantsearch.widgets.refinementList({

	// 		container: '#venue',

	// 		attributeName: 'Venue.Name',

	// 		operator: 'or',

	// 		limit: 10,

	// 		showMore: true, //toggles the - Show more - option

	// 		/*collapsible: {

	// 			collapsed: true,

	// 		},*/ // toggles the expand to display options function.

	// 		cssClasses: {

	// 			active: 'active'

	// 		},

	// 		templates: {

	// 			item: facetTemplateCheckbox,

	// 			header: '<div class="facet-title"><span>Venue</span></div>'

	// 		}

	// 	})

	// );



// Comment out the below block to remove BANDS as a refinement option.

// Please also comment out the div futher up that points to BANDS.

	search.addWidget(

		instantsearch.widgets.refinementList({

			container: '#band',

			attributeName: 'Bands',

			limit: 10,

            operator: 'or',

            showMore: true, //toggles the - Show more - option

			/*collapsible: {

				collapsed: true,

			},*/ // toggles the expand to display options function.

			cssClasses: {

				active: 'active'

			},

			templates: {

				item: facetTemplateCheckbox,

				header: '<div class="facet-title"><span>Bands</span></div">'

			}

		})

	);

	

// Comment out the below block to remove TOUR as a refinement option.

// Please also comment out the div futher up that points to TOUR.

// search.addWidget(

// 		instantsearch.widgets.refinementList({

// 			container: '#eventtour',

// 			attributeName: 'TourName',

//             operator: 'or',

//             showMore: true, //toggles the - Show more - option

// 			/*collapsible: {

// 				collapsed: true,

// 			},*/ // toggles the expand to display options function.

// 			cssClasses: {

// 				active: 'active'

// 			},

// 			templates: {

// 				item: facetTemplateCheckbox,

// 				header: '<div class="facet-title"><span>Tours</span></div">'

// 			}

// 		})

// 	); 



// Comment out the below block to remove CATEGORIES as a refinement option.

// Please also comment out the div futher up that points to CATEGORIES.

	search.addWidget(

		instantsearch.widgets.refinementList({

			container: '#categories',

			attributeName: 'Categories',

			operator: 'or',

            limit: 20,

            showMore: true, //toggles the - Show more - option

			/*collapsible: {

				collapsed: true,

			},*/ // toggles the expand to display options function.

			cssClasses: {

				active: 'active'

			},

			templates: {

				item: facetTemplateCheckbox,

				header: '<div class="facet-title"><span>Categories</span></div">'

			}

		})

    );



	search.start();

</script>

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.css" />

  </div>

  <!-- END ALGOLIA -->

</body>

</html>`;

export default chippo;
