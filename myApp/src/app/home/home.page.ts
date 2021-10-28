import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myFileUpload') myFileUpload:HTMLInputElement;
  options: CameraOptions;
  uploadContent:string="";
  private toast = null;

  constructor(private camera: Camera,
    private fileChooser: FileChooser,
    private http: HttpClient,
    // public fileOpener: FileOpener,
    // public fileChooser: FileChooser,
    // public filePicker: IOSFilePicker,
    public toastController: ToastController,
    private actionSheetCtrl: ActionSheetController) {
      this.options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
    }

  async presentActionSheet() {
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
          handler: () => {}
        }
      ]
    };

    const actionSheet = await this.actionSheetCtrl.create(actionSheetOptions);
    await actionSheet.present();
  }
  private presentFilePicker() {
    this.myFileUpload["nativeElement"].click()
  }

  uploadFile(event) {

    let sizeError = false;
      let totalSize = 0;
      let photos=[];
    
    if (event.target.files.length === 0) {
      return;
    }
    if (event.target.files && event.target.files[0]) {
      const totalFiles = event.target.files.length;

      
      for (let i = 0; i < totalFiles; i++) {
        const reader: FileReader = new FileReader();

        const name:string = event.target.files[i].name || '';
        const lastDot:number = name.lastIndexOf('.');
        const ext:string = name.substring(lastDot + 1) || '';

        if(["PDF","JPEG","TIFF","PNG","JPG"].indexOf(ext.toUpperCase()) === -1) {
          
          this.presentToast();
          return;
        }

        reader.onload = (event: any) => {
          const photoString: string = event.target.result;
          const base64Length = photoString.length - (photoString.indexOf(',') + 1);
          const padding =
            photoString.charAt(photoString.length - 2) === '=' ? 2 : photoString.charAt(photoString.length - 1) === '=' ? 1 : 0;
          const fileSize = base64Length * 0.75 - padding;
          totalSize += fileSize;

          let size = '0';
          if (fileSize < 1000) {
            size = fileSize + ' B';
          } else if (fileSize >= 1000 && fileSize < 1000000) {
            size = Math.round(fileSize / 1000) + ' KB';
          } else if (fileSize >= 1000000) {
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

          this.uploadContent=photo.imageString;
        };

        let x=reader.readAsDataURL(event.target.files[i]);
        console.log(x)
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

  private async presentToast() {
    this.toast = await this.toastController.create({
      message: 'Invalid File.Please upload PDF,JPEG,TIFF,PNG,JPG files only',
      duration: 2000
    });
    this.toast.present();
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

  private async fetchStream(stream) {
    const reader = stream.getReader();
    let charsReceived = 0;
    let result=[];
    // read() returns a promise that resolves
    // when a value has been received
    await reader.read().then(async function processText({ done, value }) {
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
  
      result[result.length+1] = chunk;
  
      // Read some more, and call this function again
      return await reader.read().then(processText);
    });

    return result.join('');


  }

}
