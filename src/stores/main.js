// stores/main.js
import { defineStore } from 'pinia'

function getSavedState(){
    if(localStorage.getItem('store')) {
      return JSON.parse(localStorage.getItem('store') );
    }
    else{
      return { 
        count: 5,
        activeRow: false
      };
    }
  };


export const useMainStore = defineStore('main', {
  state: () => {
    return getSavedState()
  },
  // could also be defined as
  // state: () => ({ count: 0 })

  getters: {
    fullAddress: (state) => {
      return (parcel) => {
        var full_address_text = parcel.attributes.HouseNumber;

        if(typeof parcel.attributes.NumberSuffix !== typeof undefined && parcel.attributes.NumberSuffix){
          full_address_text += " " + parcel.attributes.NumberSuffix;
        }

        full_address_text += " " + parcel.attributes.StreetName + " " + parcel.attributes.StreetType;

        if(typeof parcel.attributes.CondoUnit !== typeof undefined && parcel.attributes.CondoUnit){
          full_address_text += " #" + parcel.attributes.CondoUnit;
        }

        return full_address_text;
      }
    },
    searchResultsLink: (state) => {
      return (parcel) => {
        var full_address_text = parcel.attributes.HouseNumber;
        
        if(parcel.attributes.NumberSuffix){
          full_address_text += "-" + parcel.attributes.NumberSuffix;
        }

        full_address_text += "-";
        full_address_text += parcel.attributes.StreetName;
        full_address_text += "-";
        full_address_text += parcel.attributes.StreetType;

        if(typeof parcel.attributes.CondoUnit !== typeof undefined && parcel.attributes.CondoUnit){
          full_address_text += "-" + parcel.attributes.CondoUnit;
        }

        return  '/results/' + parcel.attributes.PIN + "/" + encodeURIComponent(full_address_text); 
      }
    },
    appraisedValue: (state) => {
      return (parcel) => parcel.attributes.AppraisedValue
    },
    landValue: (state) => {
      // return (parcel) => parcel.attributes.LandValue
      return (parcel) => (parcel.attributes.TotalMarketValue - parcel.attributes.AppraisedValue) + parcel.attributes.LandValue
    },
    acrerage: (state) => {
      return (parcel) => parcel.attributes.Acreage
    },
    landValuePerAcre: (state) => {
      return (parcel) => {
        if(! state.landValue(parcel) || ! state.acrerage(parcel)){
          return 0;
        }
        else{
          return Math.round(state.landValue(parcel) / state.acrerage(parcel) ); 
        }
      }
    },
    multipleLandValuePerAcre: (state) => {
      return (primaryParcel, compareParcel) => {
        const multiple = state.landValuePerAcre(primaryParcel) / state.landValuePerAcre(compareParcel);

        if(multiple < 1){
          return multiple.toFixed(2);
        }

        return Math.round(multiple )
      }
    },

    activeAppraisedValue: (state) => state.activeRow.attributes.AppraisedValue,
    activeLandValue: (state) => state.activeRow.attributes.LandValue,
    activeAcrerage: (state) => state.activeRow.attributes.Acreage,
    activeLandValuePerAcre: (state) => Math.round(state.activeLandValue / state.activeAcrerage),
  },
  actions: {
    
    increment() {
      this.count++
      this.saveState();

    },
    setActiveRow(row) {
      this.activeRow = row
      this.saveState();
    },
    saveState(){
      const state = {
        count: this.count,
        activeRow: this.activeRow
      };
      localStorage.setItem('store', JSON.stringify(state));
    }
  },
})