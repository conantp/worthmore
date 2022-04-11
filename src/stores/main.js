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