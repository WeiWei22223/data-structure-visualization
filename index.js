/*
 * Name: Wei Fan
 * Date: 04.23.2020
 * Section: CSE 154 AB (TA:Shriya Kurpad)
 *
 * This is the JS to implement the UI for my webpage, data structure visulation. It changes
 * images when user clicks image. It also checks user input for array blocks.
 */
"use strict";
(function() {
  const MAX_LENGTH = 10;
  window.addEventListener("load", init);

  /**
   * Sets up event listener for buttons and a cat image.
   */
  function init() {
    let catImg = id("pusheen");
    catImg.addEventListener("click", changeImg);
    let submitBtn = id("submit");
    submitBtn.addEventListener("click", addEntry);
    let clearBtn = id("clear");
    clearBtn.addEventListener("click", clearEntry);
  }

  /**
   * Change a pusheen image to another pusheen image.
   */
  function changeImg() {
    this.src = "https://media.giphy.com/media/J0CqRutg9uemBWeoCv/giphy.gif";
  }

  /**
   * Add user imput information. Check if user input is valid. Clear user input when there
   * is too much information displayed.
   */
  function addEntry() {
    let outputBox = id("info");
    let nameInfo = id("name").value;
    let typeInfo = id("type").value;
    let sizeInfo = id("size").value;
    let infoBox = document.createElement("p");
    if (isNaN(parseInt(sizeInfo)) || parseInt(sizeInfo) <= 0) {
      infoBox.textContent = "Array size must be an positive integer.";
    } else if (parseInt(sizeInfo) >= MAX_LENGTH) {
      infoBox.textContent = "Array size too large. Max array size is 9.";
    } else if (nameInfo.length === 0) {
      infoBox.textContent = "Array name should not be empty.";
    } else if (nameInfo.length >= MAX_LENGTH) {
      infoBox.textContent = "Array name too long. Please keep it shorter than 10 characters.";
    } else {
      infoBox.textContent = typeInfo + "[] " + nameInfo + " = new " + typeInfo + " [" +
      sizeInfo + "];";
    }
    outputBox.appendChild(infoBox);
  }

  /**
   * Clear all user input information.
   */
  function clearEntry() {
    let outputBox = id("info");
    while (outputBox.firstChild) {
      outputBox.removeChild(outputBox.lastChild);
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
})();