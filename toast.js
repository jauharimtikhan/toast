"use strict";
var Toast = {
  show: function (message) {
    const div = document.createElement("div");
    div.classList.add("toast-container");
    document.body.appendChild(div);
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toastContent.classList.add("toast-hidden");
    toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;
    toastContainer.appendChild(toastContent);
    toastContent.classList.remove("toast-hidden");
    setTimeout(function () {
      toastContent.classList.add("toast-hidden");
      setTimeout(function () {
        toastContent.remove();
      }, 500);
    }, 3000);
  },
  success: function (message) {
    const div = document.createElement("div");
    div.classList.add("toast-container");
    document.body.appendChild(div);
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toastContent.classList.add("toast-hidden");
    toastContent.classList.add("toast-success");
    toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;
    toastContainer.appendChild(toastContent);
    toastContent.classList.remove("toast-hidden");
    setTimeout(function () {
      toastContent.classList.add("toast-hidden");
      setTimeout(function () {
        toastContent.remove();
      }, 500);
    }, 3000);
  },
  error: function (message) {
    const div = document.createElement("div");
    div.classList.add("toast-container");
    document.body.appendChild(div);
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toastContent.classList.add("toast-hidden");
    toastContent.classList.add("toast-error");
    toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;
    toastContainer.appendChild(toastContent);
    toastContent.classList.remove("toast-hidden");
    setTimeout(function () {
      toastContent.classList.add("toast-hidden");
      setTimeout(function () {
        toastContent.remove();
      }, 500);
    }, 3000);
  },
  info: function (message) {
    const div = document.createElement("div");
    div.classList.add("toast-container");
    document.body.appendChild(div);
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toastContent.classList.add("toast-hidden");
    toastContent.classList.add("toast-info");
    toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;
    toastContainer.appendChild(toastContent);
    toastContent.classList.remove("toast-hidden");
    setTimeout(function () {
      toastContent.classList.add("toast-hidden");
      setTimeout(function () {
        toastContent.remove();
      }, 500);
    }, 3000);
  },
  warning: function (message) {
    const div = document.createElement("div");
    div.classList.add("toast-container");
    document.body.appendChild(div);
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");
    toastContent.classList.add("toast-hidden");
    toastContent.classList.add("toast-warning");
    toastContent.innerHTML = `
            <span class="toast-message">${message}</span>
            <button class="toast-close">&times;</button>
        `;
    toastContainer.appendChild(toastContent);
    toastContent.classList.remove("toast-hidden");
    setTimeout(function () {
      toastContent.classList.add("toast-hidden");
      setTimeout(function () {
        toastContent.remove();
      }, 500);
    }, 3000);
  },
  hide: function () {
    const toastContainer = document.querySelector(".toast-container");
    const toastContent = document.querySelector(".toast-content");
    toastContent.classList.add("toast-hidden");
    setTimeout(function () {
      toastContent.remove();
    }, 500);
  },
};
