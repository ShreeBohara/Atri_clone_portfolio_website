import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div10": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div11": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Div19": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Div21": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Div38": {
      "callbacks": {}
    },
    "Div39": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {}
    },
    "Div44": {
      "callbacks": {}
    },
    "Div45": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Div50": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "Div59": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "Div58": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "Div60": {
      "callbacks": {}
    },
    "Div61": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Div66": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div63": {
      "callbacks": {}
    },
    "Div67": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Div64": {
      "callbacks": {}
    },
    "Div68": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Div70": {
      "callbacks": {}
    },
    "Div71": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Div83": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Div84": {
      "callbacks": {}
    },
    "Div85": {
      "callbacks": {}
    },
    "Div86": {
      "callbacks": {}
    },
    "Div90": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Div88": {
      "callbacks": {}
    },
    "Div89": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "Div97": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Div99": {
      "callbacks": {}
    },
    "Div100": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Div109": {
      "callbacks": {}
    },
    "Div108": {
      "callbacks": {}
    },
    "Div107": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Div102": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Div101": {
      "callbacks": {}
    },
    "Div105": {
      "callbacks": {}
    },
    "Div118": {
      "callbacks": {}
    },
    "Div117": {
      "callbacks": {}
    },
    "Div116": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Flex56": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Div114": {
      "callbacks": {}
    },
    "Div111": {
      "callbacks": {}
    },
    "Div110": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Div120": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Div122": {
      "callbacks": {}
    },
    "Div123": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Div124": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {}
    },
    "Div126": {
      "callbacks": {}
    },
    "Div127": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Div131": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Div133": {
      "callbacks": {}
    },
    "Div139": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Div134": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Div138": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Div135": {
      "callbacks": {}
    },
    "Div137": {
      "callbacks": {}
    },
    "Div145": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Div140": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Div144": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Div141": {
      "callbacks": {}
    },
    "Div143": {
      "callbacks": {}
    },
    "Div151": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Div146": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Div150": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Div147": {
      "callbacks": {}
    },
    "Div149": {
      "callbacks": {}
    },
    "Div157": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Div152": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Div156": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Div153": {
      "callbacks": {}
    },
    "Div155": {
      "callbacks": {}
    },
    "Div158": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Div159": {
      "callbacks": {}
    },
    "Div160": {
      "callbacks": {}
    },
    "Div161": {
      "callbacks": {}
    },
    "Div162": {
      "callbacks": {}
    },
    "Flex82": {
      "callbacks": {}
    },
    "Div163": {
      "callbacks": {}
    },
    "Div164": {
      "callbacks": {}
    },
    "Div165": {
      "callbacks": {}
    },
    "Div166": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Div167": {
      "callbacks": {}
    },
    "Div168": {
      "callbacks": {}
    },
    "Div170": {
      "callbacks": {}
    },
    "Div169": {
      "callbacks": {}
    },
    "Div176": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Div177": {
      "callbacks": {}
    },
    "Div178": {
      "callbacks": {}
    },
    "Div199": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Div181": {
      "callbacks": {}
    },
    "Div182": {
      "callbacks": {}
    },
    "Div185": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Div186": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Div229": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Div187": {
      "callbacks": {}
    },
    "Div190": {
      "callbacks": {}
    },
    "Div188": {
      "callbacks": {}
    },
    "Div189": {
      "callbacks": {}
    },
    "Div232": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Div192": {
      "callbacks": {}
    },
    "Div195": {
      "callbacks": {}
    },
    "Div193": {
      "callbacks": {}
    },
    "Div194": {
      "callbacks": {}
    },
    "Div234": {
      "callbacks": {}
    },
    "Div197": {
      "callbacks": {}
    },
    "Div198": {
      "callbacks": {}
    },
    "Div216": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Div207": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Div208": {
      "callbacks": {}
    },
    "Div209": {
      "callbacks": {}
    },
    "Div217": {
      "callbacks": {}
    },
    "Div236": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Div220": {
      "callbacks": {}
    },
    "Div221": {
      "callbacks": {}
    },
    "Div218": {
      "callbacks": {}
    },
    "Div219": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Div222": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Div238": {
      "callbacks": {}
    },
    "Flex112": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Div225": {
      "callbacks": {}
    },
    "Div226": {
      "callbacks": {}
    },
    "Div223": {
      "callbacks": {}
    },
    "Div224": {
      "callbacks": {}
    },
    "Flex111": {
      "callbacks": {}
    },
    "Div227": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Div240": {
      "callbacks": {}
    },
    "Div241": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Div171": {
      "callbacks": {}
    },
    "Div172": {
      "callbacks": {}
    },
    "Div7": {
      "callbacks": {}
    },
    "Div242": {
      "callbacks": {}
    },
    "Div243": {
      "callbacks": {}
    },
    "Div244": {
      "callbacks": {}
    },
    "Div245": {
      "callbacks": {}
    },
    "Div246": {
      "callbacks": {}
    },
    "Div247": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Div248": {
      "callbacks": {}
    },
    "Div249": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Div250": {
      "callbacks": {}
    },
    "Div251": {
      "callbacks": {}
    },
    "Div252": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Div253": {
      "callbacks": {}
    },
    "Div254": {
      "callbacks": {}
    },
    "Div255": {
      "callbacks": {}
    },
    "Div256": {
      "callbacks": {}
    },
    "Div257": {
      "callbacks": {}
    },
    "Div258": {
      "callbacks": {}
    },
    "Div259": {
      "callbacks": {}
    },
    "Div260": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Div261": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Div262": {
      "callbacks": {}
    },
    "Div263": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Div264": {
      "callbacks": {}
    },
    "Div265": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Div266": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Div268": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Div267": {
      "callbacks": {}
    },
    "Div270": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Div269": {
      "callbacks": {}
    },
    "Div272": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Div271": {
      "callbacks": {}
    },
    "Div281": {
      "callbacks": {}
    },
    "Div277": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Div273": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Div278": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Div274": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Div279": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Div275": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Div280": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Div276": {
      "callbacks": {}
    },
    "Div282": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Div284": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Div286": {
      "callbacks": {}
    },
    "Div287": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Div288": {
      "callbacks": {}
    },
    "Div289": {
      "callbacks": {}
    },
    "Div290": {
      "callbacks": {}
    },
    "Div291": {
      "callbacks": {}
    },
    "Div292": {
      "callbacks": {}
    },
    "Div297": {
      "callbacks": {}
    },
    "Div298": {
      "callbacks": {}
    },
    "Div299": {
      "callbacks": {}
    },
    "Div300": {
      "callbacks": {}
    },
    "Div301": {
      "callbacks": {}
    },
    "Div302": {
      "callbacks": {}
    },
    "TextBox15": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.jfif"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/WhatsApp%20Image%202022-12-28%20at%2011.11.46%20PM.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0ccdbeafadf1a24d34a_Group%20333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0ccdbeafadf1a24d34a_Group%20333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-24%20162650.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex19": {
      "callbacks": {}
    },
    "TextBox27": {
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "callbacks": {}
    },
    "TextBox28": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "callbacks": {}
    },
    "TextBox29": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex24": {
      "callbacks": {}
    },
    "TextBox30": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "callbacks": {}
    },
    "TextBox31": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex26": {
      "callbacks": {}
    },
    "TextBox32": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-24%20162454.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex31": {
      "callbacks": {}
    },
    "TextBox35": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex32": {
      "callbacks": {}
    },
    "TextBox36": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex33": {
      "callbacks": {}
    },
    "TextBox37": {
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-24%20162507.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "I bring results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.jfif"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Datadash Product design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "PRODUCT   DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcc78ec31466630c033f_image_processing20200129-19798-1k8ponz%202-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcd635f7f176db9fef1e_image_processing20200129-19798-1k8ponz%203-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div130": {
      "callbacks": {}
    },
    "TextBox61": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div136": {
      "callbacks": {}
    },
    "TextBox66": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div142": {
      "callbacks": {}
    },
    "TextBox70": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div148": {
      "callbacks": {}
    },
    "TextBox74": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div154": {
      "callbacks": {}
    },
    "TextBox78": {
      "custom": {
        "text": "5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "April 16, 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div230": {
      "callbacks": {}
    },
    "Image32": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div231": {
      "callbacks": {}
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div233": {
      "callbacks": {}
    },
    "TextBox96": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "• April 2019-Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20215847.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div235": {
      "callbacks": {}
    },
    "Image38": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20220254.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image39": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div237": {
      "callbacks": {}
    },
    "Image40": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20220323.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "• April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image41": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20214311.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div239": {
      "callbacks": {}
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-27%20211847.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/download.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image42": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-28%20125037.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-12-28%20125325.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "John Franklin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584ac8595f0e43b2b567_Vector-1%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584a5ceaed4f77de60cb_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "What does your design process look like?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%25201%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div285": {
      "callbacks": {}
    },
    "TextBox133": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078d43538e88cf2a8ff4464_White%2520Logo%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60792c7df85964dafaa3825d_Vector%5B1%5D.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "Dribble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "© All rights reserved. Shree Bohara MIT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
