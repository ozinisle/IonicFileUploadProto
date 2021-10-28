(self["webpackChunkmyApp"] = self["webpackChunkmyApp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 5089);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 5103);
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ 5079);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);








let HomePage = class HomePage {
    constructor(camera, fileChooser, http, 
    // public fileOpener: FileOpener,
    // public fileChooser: FileChooser,
    // public filePicker: IOSFilePicker,
    toastController, actionSheetCtrl) {
        this.camera = camera;
        this.fileChooser = fileChooser;
        this.http = http;
        this.toastController = toastController;
        this.actionSheetCtrl = actionSheetCtrl;
        this.uploadContent = "";
        this.toast = null;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheetOptions = {
                header: 'Upload a photo',
                buttons: [
                    {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.options.sourceType = this.camera.PictureSourceType.CAMERA;
                            //this.getPicture();
                        }
                    },
                    {
                        text: 'Library',
                        icon: 'images',
                        handler: () => {
                            this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
                            this.presentFilePicker();
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            };
            const actionSheet = yield this.actionSheetCtrl.create(actionSheetOptions);
            yield actionSheet.present();
        });
    }
    presentFilePicker() {
        this.myFileUpload["nativeElement"].click();
    }
    uploadFile(event) {
        let sizeError = false;
        let totalSize = 0;
        let photos = [];
        if (event.target.files.length === 0) {
            return;
        }
        if (event.target.files && event.target.files[0]) {
            const totalFiles = event.target.files.length;
            for (let i = 0; i < totalFiles; i++) {
                const reader = new FileReader();
                const name = event.target.files[i].name || '';
                const lastDot = name.lastIndexOf('.');
                const ext = name.substring(lastDot + 1) || '';
                if (["PDF", "JPEG", "TIFF", "PNG", "JPG"].indexOf(ext.toUpperCase()) === -1) {
                    this.presentToast();
                    return;
                }
                reader.onload = (event) => {
                    const photoString = event.target.result;
                    const base64Length = photoString.length - (photoString.indexOf(',') + 1);
                    const padding = photoString.charAt(photoString.length - 2) === '=' ? 2 : photoString.charAt(photoString.length - 1) === '=' ? 1 : 0;
                    const fileSize = base64Length * 0.75 - padding;
                    totalSize += fileSize;
                    let size = '0';
                    if (fileSize < 1000) {
                        size = fileSize + ' B';
                    }
                    else if (fileSize >= 1000 && fileSize < 1000000) {
                        size = Math.round(fileSize / 1000) + ' KB';
                    }
                    else if (fileSize >= 1000000) {
                        size = Math.round(fileSize / 1000000) + ' MB';
                    }
                    if (totalSize > 9000000) {
                        this.presentToast();
                        return;
                    }
                    const fileType = photoString.slice(photoString.indexOf(':') + 1, photoString.indexOf(';'));
                    const imageString = event.target.result.slice(photoString.indexOf(',') + 1, photoString.length);
                    const photo = {
                        image: event.target.result,
                        type: fileType,
                        ext: ext,
                        size: size,
                        imageString: imageString,
                        error: sizeError
                    };
                    photos.push(photo);
                    this.uploadContent = photo.imageString;
                };
                let x = reader.readAsDataURL(event.target.files[i]);
                console.log(x);
            }
        }
    }
    // public async uploadFile(fileUploadEvent:Event) {
    //   const uploadFileField:HTMLInputElement = <HTMLInputElement>fileUploadEvent.target;
    //   const uploadedFile=uploadFileField.files[0];
    //   const formData = new FormData();
    //   formData.append('files[]', uploadedFile);
    //   console.log(formData,uploadedFile);
    //   let x = await this.fetchStream(uploadedFile.stream());
    //   this.http.post("http://localhost:4000/fileupload-endpoint",formData)
    //     .subscribe((data:any)=>{
    //       console.log('response obtained >>>'+ data);
    //     });
    //   console.log('ok');
    // //   this.uploadContent += "attempting to  upload file";
    // //   this.uploadContent += "--------\n\r\v\n\r\v<br>-------";   
    // //   this.fileChooser.open()
    // // .then(uri => {
    // //   this.uploadContent += "Uploaded URI >>> " + uri;
    // // })
    // // .catch(e => {
    // //   this.uploadContent += "error >>> " + e;
    // // });
    //   // FilePicker.showFilePicker({
    //   //   fileTypes: ["image/*", "application/pdf"],
    //   // }).then(
    //   //   (fileResult: FilePickerResult) => {
    //   //     const fileUri = fileResult.uri;
    //   //     const fileName = fileResult.name;
    //   //     const fileMimeType = fileResult.mimeType;
    //   //     const fileExtension = fileResult.extension;
    //   //   },
    //   //   (error) => {
    //   //     console.log(error);
    //   //   }
    //   // );
    // }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.toast = yield this.toastController.create({
                message: 'Invalid File.Please upload PDF,JPEG,TIFF,PNG,JPG files only',
                duration: 2000
            });
            this.toast.present();
        });
    }
    // private performFileUpload(fileUri) {
    //   const uploadedFileExtn = fileUri.substring(fileUri.lastIndexOf(".") + 1, fileUri.length);
    //   const fileTransferObj: FileTransferObject = this.fileTransfer.create();
    //   if (["PDF", "JPEG", "TIFF", "PNG", "JPG"].indexOf(uploadedFileExtn.toUpperCase()) === -1) {
    //     this.presentToast();
    //     return;
    //   } else {
    //     const options: FileUploadOptions = {
    //       fileKey: 'file',
    //       fileName: fileUri,
    //       headers: {}
    //     }
    //     this.uploadContent += "uploaded file >>> " + fileUri;
    //     this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //     fileTransferObj.upload(fileUri, "http://nodeserver/uploadFileEndPoint", options)
    //     .then((data) => {
    //       // success
    //       this.uploadContent += "successfully uploaded file >>> " + fileUri;
    //       this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //       this.uploadContent += "data >>> " + data;
    //     }, (err) => {
    //       // error
    //       this.uploadContent += "error uploading file >>> " + fileUri;
    //       this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //       this.uploadContent += "error  >>> " + err;
    //     })
    //   }
    //   //this.filePath.resolveNativePath(fileUri).then((nativepath) => {
    //   // const nativepath = fileUri;
    //   // this.uploadContent += "uploaded file >>> " + fileUri;
    //   // this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //   // const filename = nativepath.substring(nativepath.lastIndexOf('/') + 1);
    //   // this.uploadContent += "uploaded filename >>> " + filename;
    //   // this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //   // const folder = nativepath.substring(0, nativepath.lastIndexOf('/') + 1);
    //   // this.uploadContent += "uploaded folder >>> " + folder;
    //   // this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //   // this.file.readAsDataURL(folder, filename).then((fileData) => {
    //   //   this.uploadContent += "uploaded file readAsDataURL >>> " + fileData;
    //   //   this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //   //   const imageData = fileData.split(";")[0];
    //   //   this.uploadContent += "uploaded file content >>> " + imageData;
    //   //   this.uploadContent += "--------\n\r\v\n\r\v<br>-------";
    //   //   const uploadedFileExtn = fileUri.substring(fileUri.lastIndexOf(".") + 1, fileUri.length);
    //   //   if (["PDF", "JPEG", "TIFF", "PNG", "JPG"].indexOf(uploadedFileExtn.toUpperCase()) === -1) {
    //   //     this.presentToast();
    //   //     return;
    //   //   } else {
    //   //     const mimeType = uploadedFileExtn.toUpperCase() === "PDF" ? "application/pdf" : `image/${uploadedFileExtn}base64`;
    //   //     const base64Image = `data:${mimeType},` + imageData;
    //   //     const base64Length = base64Image.length - (base64Image.indexOf(',') + 1);
    //   //     const padding = base64Image.charAt(base64Image.length - 2) === '=' ? 2 : base64Image.charAt(base64Image.length - 1) === '=' ? 1 : 0;
    //   //     const fileSize = base64Length * 0.75 - padding;
    //   //     let size = '0';
    //   //     if (fileSize < 1000) {
    //   //       size = fileSize + ' B';
    //   //     } else if (fileSize >= 1000 && fileSize < 1000000) {
    //   //       size = Math.round(fileSize / 1000) + ' KB';
    //   //     } else if (fileSize >= 1000000) {
    //   //       size = Math.round(fileSize / 1000000) + ' MB';
    //   //     }
    //   //     const blob = GlobalUtils.base64toBlob(imageData, mimeType);
    //   //     this.store.dispatch(new UploadReimbursementReceipt(base64Image, blob, size, fileSize));
    //   //   }
    //   //   //});
    //   // });
    // }
    // this.camera.getPicture(this.options).then(imageData => {
    //   const base64Image = 'data:image/jpeg;base64,' + imageData;
    //   const base64Length = base64Image.length - (base64Image.indexOf(',') + 1);
    //   const padding = base64Image.charAt(base64Image.length - 2) === '=' ? 2 : base64Image.charAt(base64Image.length - 1) === '=' ? 1 : 0;
    //   const fileSize = base64Length * 0.75 - padding;
    //   let size = '0';
    //   if (fileSize < 1000) {
    //     size = fileSize + ' B';
    //   } else if (fileSize >= 1000 && fileSize < 1000000) {
    //     size = Math.round(fileSize / 1000) + ' KB';
    //   } else if (fileSize >= 1000000) {
    //     size = Math.round(fileSize / 1000000) + ' MB';
    //   }
    //   const blob = GlobalUtils.base64toBlob(imageData, 'image/jpeg');
    //   this.store.dispatch(new UploadReimbursementReceipt(base64Image, blob, size, fileSize));
    // });
    fetchStream(stream) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const reader = stream.getReader();
            let charsReceived = 0;
            let result = [];
            // read() returns a promise that resolves
            // when a value has been received
            yield reader.read().then(function processText({ done, value }) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    // Result objects contain two properties:
                    // done  - true if the stream has already given you all its data.
                    // value - some data. Always undefined when done is true.
                    if (done) {
                        console.log("Stream complete");
                        return;
                    }
                    // value for fetch streams is a Uint8Array
                    charsReceived += value.length;
                    const chunk = value;
                    let listItem = document.createElement('li');
                    listItem.textContent = 'Received ' + charsReceived + ' characters so far. Current chunk = ' + chunk;
                    //list2.appendChild(listItem);
                    result[result.length + 1] = chunk;
                    // Read some more, and call this function again
                    return yield reader.read().then(processText);
                });
            });
            return result.join('');
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__.FileChooser },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
HomePage.propDecorators = {
    myFileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['myFileUpload',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  \n\n  <div id=\"container\">\n    <input #myFileUpload type=\"file\" name=\"myfile\" style=\"display:none\" (change)=\"uploadFile($event)\">\n    \n    <strong>Ready to create an app?</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n    \n    <ion-button\n        class=\"upload-button\"\n        type=\"button\"\n        [expand]=\"'block'\"\n        [size]=\"'large'\"\n        [fill]=\"'outline'\"\n        (click)=\"presentActionSheet()\"\n      >\n        Upload Your Receipt</ion-button\n      >\n\n      <ion-content style=\"display: block;\n      position: absolute;\n      top: 100px;\n      left: 0px;\n      height: 300px;\n      width: 250px;\n      border: 1px solid blue;\n      z-index: 11000;\n      background: white;\">\n      {{uploadContent}}\n    </ion-content>\n  </div>\n\n \n\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map