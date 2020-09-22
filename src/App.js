// import "babel-polyfill";
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import './App.css';
//import logo from './logo.svg';
import { PivotTable, Visualization, Table, HeaderPredicateFactory, BarChart, ColumnChart, LineChart, AreaChart, Headline} from '@gooddata/react-components';
import { ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap, AttributeFilter, Kpi} from '@gooddata/react-components';

import assign from 'lodash/assign';
import get from 'lodash/get';
import PropTypes from 'prop-types';
//import { Amount_test } from "../src/measures";

const projectId = 'xmskz0nppzi4qmlf3se7hs3ueimftkpw';

const Amount = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "item" : {
              "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1279"
           }
        }
     },
     "localIdentifier" : "m_measure",
     "title" : "Amount"
  }
};

const Local_filter_measure = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "filters" : [
               {
                  "relativeDateFilter" : {
                     "dataSet" : {
                        "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/330"
                     },
                     "from" : -8,
                     "granularity" : "GDC.time.year",
                     "to" : -8
                  }
               }
            ],
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1279"
            }
         }
      },
      "localIdentifier" : "m_local_filter_measure",
      "title" : "Amount, Closed kiểm tra: Last year"
   }
};

const Sum_of_Amount = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "aggregation" : "sum",
           "filters" : [
            {
               "absoluteDateFilter" : {
                  "dataSet" : {
                     "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/330"
                  },
                  "from" : "2011-01-01",
                  "to" : "2012-12-31"
               }
            },
            {
               "positiveAttributeFilter" : {
                  "displayForm" : {
                     "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1028"
                  },
                  "in" : [
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1224",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1228",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1227",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1229",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1230",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1231",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1232",
                     "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1025/elements?id=1233"
                  ]
               }
            }
         ],
           "item" : {
              "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1144"
           }
        }
     },
     "format" : "#,##0.00",
     "localIdentifier" : "m_fact_measure",
     "title" : "Sum of Amount Fact"
  }
};

const Count_of_OppSnapshot = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "aggregation" : "count",
           "item" : {
              "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1143"
           }
        }
     },
     "format" : "#,##0",
     "localIdentifier" : "m_att_measure",
     "title" : "Count of Opp. Snapshot 1"
  }
};
const Count_of_OppSnapshot2 = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "aggregation" : "count",
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1143"
            }
         }
      },
      "format" : "#,##0",
      "localIdentifier" : "m_att_measure22",
      "title" : "Count of Opp. Snapshot 2"
   }
 };

 const Count_of_OppSnapshot3 = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "aggregation" : "count",
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1143"
            }
         }
      },
      "format" : "#,##0",
      "localIdentifier" : "m_att_measure3",
      "title" : "Count of Opp. Snapshot3"
   }
 };

const Count_of_CA = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "aggregation" : "count",
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/79605"
            }
         }
      },
      "format" : "#,##0",
      "localIdentifier" : "count_of_ca",
      "title" : "Count of Computed attribute 11/10"
   }
};

const _Amount_of_Product = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/89889"
            }
         }
      },
      "format" : "#,##0",
      "localIdentifier" : "m_%_amount_of_product",
      "title" : "% Amount of Product"
   }
 };

const Invalid_measure = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/75548"
            }
         }
      },
      "localIdentifier" : "m_invalid",
      "title" : "Invalid"
   }
 };

 const Nodata_measure = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/75551"
            }
         }
      },
      "localIdentifier" : "m_nodata",
      "title" : "No data Measure"
   }
 };

 const Negative_measure = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/75550"
            }
         }
      },
      "localIdentifier" : "m_negative",
      "title" : "<button>Negative measure</button>"
   }
 };

 const Restricted_measure = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1175"
            }
         }
      },
      "localIdentifier" : "m_restricted",
      "title" : "Restricted measure"
   }
 };

const Quota = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/49159"
            }
         }
      },
      "localIdentifier" : "m_quota",
      "title" : "Quota"
   }
};

const Product = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/952"
     },
     "localIdentifier" : "a_product"
  }
};

const StageName = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1805"
     },
     "localIdentifier" : "a_stagename"
  }
};

const Department = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1027"
      },
      "localIdentifier" : "a_department"
   }
};

const Date_Closed = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/324"
     },
     "localIdentifier" : "a_date_closed"
  }
};

const Opp_Snapshot = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1149"
      },
      "localIdentifier" : "a_opp_snapshot"
   }
 };

 const Account = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/970"
      },
      "localIdentifier" : "a_account"
   }
 };

 const Computed_attribute = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/79606"
      },
      "localIdentifier" : "a_ca"
   }
 };

 const Protected_attribute = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1177"
      },
      "localIdentifier" : "a_protected"
   }
};

const _CloseBOP = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/9211"
            }
         }
      },
      "localIdentifier" : "closebop",
      "title" : "_Close [BOP]"
   }
};
const _CloseEOP = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/9203"
            }
         }
      },
      "localIdentifier" : "closeeop",
      "title" : "_Close [EOP]"
   }
};
const _SnapshotBOP = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/2723"
            }
         }
      },
      "localIdentifier" : "snapshotbop",
      "title" : "_Snapshot [BOP]"
   }
};

///--------------------------FILTER---------------------------///

const filterProduct = {
   "positiveAttributeFilter" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/952"
      },
      "in" : [
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168279",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168282",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=169655"
      ]
   }
};

const notInfilterProduct = {
   "negativeAttributeFilter" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/952"
      },
      "notIn" : [
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168279",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168282",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=169655"
      ]
   }
};
//const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const absoluteDate = {
   "absoluteDateFilter" : {
      "dataSet" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/330"
      },
      "from" : "2010-01-01",
      "to" : "2010-12-31"
   }
};
//const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const relativeDate = {
   "relativeDateFilter" : {
      "dataSet" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/330"
      },
      "from" : -8,
      "granularity" : "GDC.time.year",
      "to" : -8
   }
};

const measure_value_filter = {
   "measureValueFilter": {
     "measure": {
       "localIdentifier": "m_local_filter_measure"
     },
     "condition": {
       "range": {
         "operator": "BETWEEN", // GREATER_THAN, GREATER_THAN_OR_EQUAL_TO, LESS_THAN, LEST_THAN_OR_EQUAL_TO, NOT_EQUAL_TO
         "from": 200000,
         "to": 500000
       }
     }
   }
 }; 

 const filter_protected = {
   "positiveAttributeFilter" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1177"
      },
      "in" : [
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=1",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=20",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=2240",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=1340",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=2241",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1174/elements?id=2242"
      ]
   }
};

///--------------------------HYPERLOGLOG---------------------------///

const projectId_hyperloglog = "nnra7xdk83yrj78f19zuzrlm40ecrks1";

const hyperloglog = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "item" : {
               "uri" : "/gdc/md/nnra7xdk83yrj78f19zuzrlm40ecrks1/obj/1013"
            }
         }
      },
      "localIdentifier" : "m_hyperloglog",
      "title" : "_ftg_hll1_METRIC"
   }
};

const attributehp1 = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/nnra7xdk83yrj78f19zuzrlm40ecrks1/obj/803"
      },
      "localIdentifier" : "a1_hyperloglog"
   }
};

const attributehp2 = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/nnra7xdk83yrj78f19zuzrlm40ecrks1/obj/805"
      },
      "localIdentifier" : "a2_hyperloglog"
   }
};

///--------------------------Masking elements---------------------------///
const masking_elements = {
   "measure" : {
      "definition" : {
         "measureDefinition" : {
            "aggregation" : "sum",
            "item" : {
               "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1144"
            }
         }
      },
      "format" : "#,##0.00",
      "localIdentifier" : "m_masking_element",
      "title" : "Sum of Amount Fact"
   }
};
const attribute_masking = {
   "visualizationAttribute" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/992"
      },
      "localIdentifier" : "att_masking_element"
   }
};

const filter_masking_element = {
   "positiveAttributeFilter" : {
      "displayForm" : {
         "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/992"
      },
      "in" : [
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=958076",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=964772",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=958078",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=965525",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=961041",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=966523",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=961043",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=966483",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=958080",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=966525",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=961045",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=961047",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=961039",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=965524",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=958082",
         "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/990/elements?id=964773"
      ]
   }
};

const filter_bullet_chart = [
   {
      "positiveAttributeFilter" : {
         "displayForm" : {
            "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/952"
         },
         "in" : [
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168279",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168282",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=169655",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949/elements?id=168284"
         ]
      }
   },
   {
      "negativeAttributeFilter" : {
         "displayForm" : {
            "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1805"
         },
         "notIn" : [
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1095/elements?id=966649",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1095/elements?id=966648",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1095/elements?id=966647",
            "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/1095/elements?id=966646"
         ]
      }
   },
   {
      "absoluteDateFilter" : {
         "dataSet" : {
            "uri" : "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/330"
         },
         "from" : "2011-01-01",
         "to" : "2011-12-31"
      }
   }
];

const DOWNLOADER_ID = 'downloader';

class App extends Component {

  constructor(props) {
         super(props);
         this.state = {
            filters: []
         };
         this.onExportReady = this.onExportReady.bind(this);
         this.doExport = this.doExport.bind(this);
    }

    onApply = (filter) => {
            console.log('AttributeFilterExample filter', filter);
            const filters = [];
            const isPositive = !!filter.in;
            const elementsProp = isPositive ? 'in' : 'notIn';
            var attrUri = "/gdc/md/xmskz0nppzi4qmlf3se7hs3ueimftkpw/obj/949";
            const valules = filter[elementsProp].map(element => (`${attrUri}/elements?id=${element}`)) ;
            console.log('AttributeFilterExample filter', valules);
            //var attrUri = `/gdc/md/${projectId}/obj/75727`;
            //end control handle filter with more attributes
            if(valules.length > 0){
            filters.push({
               [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
                  displayForm: {
                        identifier: filter.id //if define attribute filter with identifier then id will return identifier
                  },
               //uri của attribute không phải của label
                  [elementsProp]: valules 
               }
            });
         
            filters.push(relativeDate,measure_value_filter)
            
            }
            this.setState({filters});
      }

      onExportReady(exportResult) {
         this.exportResult = exportResult;
      }

      async doExport(exportConfig) {
         const result = await this.exportResult({
            title: 'Export File',
            format: 'xlsx', // or 'csv', xlsx
            mergeHeaders: true, // or false
            includeFilterContext: true //includeFilterContext: true or false
         });
         this.downloadFile(result.uri);

      }

      downloadFile(uri) {
         let anchor = document.getElementById(DOWNLOADER_ID);
         if (!anchor) {
             anchor = document.createElement('a');
             anchor.id = DOWNLOADER_ID;
             document.body.appendChild(anchor);
         }
         anchor.href =  uri;
         anchor.download = uri;
         anchor.click();
     }

// MAIN CONTENT
  render() {
    const { filters } = this.state;
    return (
      <div className="App">
           <hr className="separator" />
           <div className="App" style={{width: 1500, height: 50, marginLeft: 0}}>
               <AttributeFilter
                        identifier="label.product.id.name"
                        projectId={projectId}
                        fullscreenOnMobile={false}
                        onApply={this.onApply}
                     />
            </div>
            <hr className="separator" />
            <div class ="export-button" style={{ height: 100, width: 800}}>
               <button className="button button-secondary" onClick={this.doExport}>Export</button>
            </div>
            
          <hr className="separator" />
          <div><p>Bar Chart</p></div>
          <div style={{ height: 700, width: 1200 }}>
            <BarChart
              projectId={projectId}
            //   primaryMeasure={Sum_of_Amount}
              measures={[Sum_of_Amount, Amount, Negative_measure]}
              viewBy={[Product]}
              filters={filter_bullet_chart}
              onExportReady={this.onExportReady}
           
            />
          </div>
          <div style={{ height: 100, width: 800 }}>
            <p>END PAGE</p>
          </div>
      </div>
    );
  }
}

export default App;