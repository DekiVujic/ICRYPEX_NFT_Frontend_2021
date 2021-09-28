
import Dropzone from "dropzone";

// Make sure Dropzone doesn't try to attach itself to the
// element automatically.
// This behaviour will change in future versions.
Dropzone.autoDiscover = false;

let createNftUploadFile = new Dropzone(".createnftuploadfile", {
    url: "/file/post",
    paramName: "images", // The name that will be used to transfer the file
    maxFiles: 1,
    maxFilesize: 2, // MB
    autoProcessQueue: false,
    uploadMultiple: false,
    acceptedFiles: ".jpeg,.jpg,.png,.gif",
    thumbnailWidth: null,
    thumbnailHeight: null,
    resizeQuality: 1,
    resizeMethod: "crop",
    init: function() {}
});

createNftUploadFile.on("addedfile", file => {
    console.log(`File added: ${file.name}`);
});

let createNftUploadDoc01 = new Dropzone(".createnftuploaddoc01", {
    url: "/file/post",
    paramName: "images", // The name that will be used to transfer the file
    maxFiles: 1,
    maxFilesize: 2, // MB
    autoProcessQueue: false,
    uploadMultiple: false,
    acceptedFiles: ".jpeg,.jpg,.png,.gif",
    thumbnailWidth: null,
    thumbnailHeight: null,
    resizeQuality: 1,
    resizeMethod: "crop",
    init: function() {}
});

let createNftUploadDoc02 = new Dropzone(".createnftuploaddoc02", {
    url: "/file/post",
    paramName: "images", // The name that will be used to transfer the file
    maxFiles: 1,
    maxFilesize: 2, // MB
    autoProcessQueue: false,
    uploadMultiple: false,
    acceptedFiles: ".jpeg,.jpg,.png,.gif",
    thumbnailWidth: null,
    thumbnailHeight: null,
    resizeQuality: 1,
    resizeMethod: "crop",
    init: function() {}
});