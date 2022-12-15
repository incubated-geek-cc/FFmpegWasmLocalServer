if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    callback();
} else {
    document.addEventListener('DOMContentLoaded', async () => {
      console.log('DOMContentLoaded');

      const cards=document.querySelectorAll('.card');
      let maxHeight;
      for(let card of cards) {
        if(typeof maxHeight === 'undefined' || card.clientHeight>maxHeight) {
          maxHeight=card.clientHeight;
        }
      }
      for(let card of cards) {
        card['style']['height']=`${maxHeight}px`;
        card['style']['overflow-y']='auto';
      }
      const logsOutput=document.getElementById('logsOutput');
      logsOutput['style']['height']=`calc(100vh - 50px - 0.25rem - 0.25rem - 0.25rem - 0.25rem - 0.25rem - ${maxHeight}px)`;
      const yearDisplay = document.getElementById('yearDisplay');
      yearDisplay.innerHTML=new Date().getFullYear();


      const outputLogs = document.getElementById('outputLogs');
      function getCurrentDatetimeStamp() {
          const d = new Date();
          let datestamp = d.getFullYear() + '-' + ( (d.getMonth() + 1<10) ? ('0'+d.getMonth() + 1) : (d.getMonth() + 1) ) + '-' + ( (d.getDate()<10) ? ('0'+d.getDate()) : (d.getDate()) );
          let timestamp = ( (d.getHours()<10) ? ('0'+d.getHours()) : (d.getHours()) ) + ':' + ( (d.getMinutes()<10) ? ('0'+d.getMinutes()) : (d.getMinutes()) ) + ':' + ( (d.getSeconds()<10) ? ('0'+d.getSeconds()) : (d.getSeconds()) );

          let datetimeStr = datestamp + ' ' + timestamp;
          return datetimeStr;
      }
      const infoNote='ɪɴғᴏ ';
      const errNote='ᴇʀʀᴏʀ';
      function appendDataLog(logMsg) {
        if(typeof logMsg === 'string') {
          let logType=infoNote;

          let textClass='text-light bg-dark';
          if(logMsg.toLowerCase().includes('fail')) {
            logType=errNote;
            textClass='text-light bg-danger'; 
            logMsg=`${logMsg}`;
          } else if(logMsg.indexOf('[fferr] size= ')===0 || logMsg.indexOf('[fferr] frame= ')===0) {
            textClass='text-white bg-primary'; // impt. action n eeded
            logMsg=`${logMsg}`;
          } else if(logMsg.indexOf('[fferr]')===0 && logMsg.includes(':') && !logMsg.toLowerCase().includes('config')) {
            textClass='text-primary bg-light'; // file info
            logMsg=`${logMsg}`;
          } else if(logMsg.indexOf('[info]')===0) {
            textClass='text-dark'; // better than filler
            logMsg=`${logMsg}`;
          } else if(logMsg.indexOf('[fferr]')===0) {
            textClass='text-secondary'; // filler logs
            logMsg=`${logMsg}`;
          } else if(logMsg.indexOf('[ffout]')===0) {
            textClass='text-white bg-success'; // impt notification. process ended.
            logMsg=`${logMsg}`;
          } else {
            logMsg=`${logMsg}`;
          }
          outputLogs.insertAdjacentHTML('beforeend','<p class="mb-0 small"><span class="unicode text-dark mr-1">'+logType+'</span><span class="text-white bg-dark"><span class="symbol">【</span>'+getCurrentDatetimeStamp()+'<span class="symbol">】</span></span> <span class="'+textClass+'"> '+logMsg.trim()+' </span></p>');

          let scrollTopVal=outputLogs.scrollHeight - outputLogs.clientHeight;
          outputLogs.scroll(0, scrollTopVal);
        }
      }
      function appendErrorLog(errMsg) {
        if(typeof errMsg === 'string') {
          outputLogs.insertAdjacentHTML('beforeend','<p class="mb-0 small"><span class="unicode text-dark mr-1">'+errNote+'</span><span class="text-white bg-dark"><span class="symbol">【</span>'+getCurrentDatetimeStamp()+'<span class="symbol">】</span></span> <span class="text-light bg-danger"> '+errMsg.trim()+' </span></p>');

          let scrollTopVal=outputLogs.scrollHeight - outputLogs.clientHeight;
          outputLogs.scroll(0, scrollTopVal);
        }
      }
      console.logs = console.log.bind(console);
      // console.dataLogs = [];
      console.log = function() {
          console.logs.apply(console, arguments);
          if(Array.from(arguments).length===1 && typeof (Array.from(arguments)[0])==='string') {
            appendDataLog(Array.from(arguments)[0]);
          }
          // console.dataLogs.push(Array.from(arguments));
      };
      console.errors = console.error.bind(console);
      // console.errLogs = [];
      console.error = function(){
          console.errors.apply(console, arguments);
          if(Array.from(arguments).length===1 && typeof Array.from(arguments)==='object') {
            appendErrorLog(Array.from(arguments)[0].path[0].error.message);
          }
          // console.errLogs.push(Array.from(arguments)[0]);
      };

      const isCrossOriginIsolated=document.getElementById('isCrossOriginIsolated');
      if(crossOriginIsolated) {
        isCrossOriginIsolated.innerHTML='🟢'; // green
      } else {
        isCrossOriginIsolated.innerHTML='🔴'; // red
      }

      const uploadMediaBtn = document.getElementById('uploadMediaBtn');
      const uploadMedia = document.getElementById('uploadMedia');
      uploadMediaBtn.addEventListener('click', () => {
          uploadMedia.click();
      });
      const fileNameDisplay=document.getElementById('FileName');
      const fileTypeDisplay=document.getElementById('FileType');
      const fileSizeDisplay=document.getElementById('FileSize');

      const outputFileExtension=document.getElementById('outputFileExtension');
      const FileExtDisplay=document.getElementById('FileExt');
      const MimeTypeDisplay=document.getElementById('MimeType'); 
      const MimeDescriptionDisplay=document.getElementById('MimeDescription'); 

      const resetAllBtn=document.getElementById('resetAllBtn');
      const saveOutputBtn=document.getElementById('saveOutput');
      saveOutputBtn.disabled=true;

      function triggerEvent(el, type) {
        let e = ( ('createEvent' in document) ? document.createEvent('HTMLEvents') : document.createEventObject() );
        if ('createEvent' in document) { 
          e.initEvent(type, false, true);
          el.dispatchEvent(e);
        } else { 
          e.eventType = type;
          el.fireEvent('on' + e.eventType, e);
        }
      }

      function convertBitArrtoB64(bitArr) { // Uint8Array to Base64
         return btoa(bitArr.reduce((data, byte) => data + String.fromCharCode(byte), ''));
      }

      function readFileAsArrayBuffer(file) {
          return new Promise((resolve, reject) => {
            let fileredr = new FileReader();
            fileredr.onload = () => resolve(fileredr.result);
            fileredr.onerror = () => reject(fileredr);
            fileredr.readAsArrayBuffer(file);
          });
      }

      let isSelected=false;
      let counter=0;
      for(let mimeTypeObj of mimeTypes) {
        let fileExt=mimeTypeObj['Extension'];
        let fileDescription=mimeTypeObj['Description'];
        let fileMimeType=mimeTypeObj['MIME_Types'][0];
        let conversionWorks=mimeTypeObj['Works'];

        let oOption=document.createElement('option');
        oOption.value=fileMimeType;
        oOption.text=`${fileDescription} [${fileExt}]`;

        // if(!conversionWorks) {
        //   oOption.disabled=true;
        //   oOption['style']['color']='#999999';
        //   oOption['style']['background']='#f0f0f0';
        //   oOption['style']['border']='1px solid #e1e1e1';
        // } else
        if(!isSelected) {
          oOption.setAttribute('selected',true);

          MimeTypeDisplay.innerHTML=fileMimeType;
          FileExtDisplay.innerHTML=fileExt;
          MimeDescriptionDisplay.innerHTML=fileDescription;
          
          isSelected=true;
        }
        outputFileExtension.add(oOption, counter++);
      }
      await new Promise((resolve, reject) => setTimeout(resolve, 50));

      outputFileExtension.addEventListener('change', async(e)=> {
        let allOptions=e.currentTarget.options;
        let optionSelectedIndex=e.currentTarget.selectedIndex;
        let mimeType=allOptions[optionSelectedIndex].value;

        let fileExtStr=((e.currentTarget.options[optionSelectedIndex].textContent).split('[')[1]);
        fileExtStr=fileExtStr.replaceAll(']','');
       
        let mimeDescriptionStr=((e.currentTarget.options[optionSelectedIndex].textContent).split('[')[0]);
        mimeDescriptionStr=mimeDescriptionStr.trim();

        MimeTypeDisplay.innerHTML=mimeType;
        FileExtDisplay.innerHTML=fileExtStr;
        MimeDescriptionDisplay.innerHTML=mimeDescriptionStr;
      });
      
      const HTML5MediaTypes={
        '.mp4':true,
        '.mp3':true,
        '.wav':true,
        '.ogg':true
      };
      const mediaWrapper = document.getElementById('mediaWrapper');
      const displayedHeightVal=150;
      const loadMedia = (url, type) => new Promise((resolve, reject) => {
          var mediaObj = document.createElement(type);
          mediaObj.addEventListener('canplay', () => resolve(mediaObj));
          mediaObj.addEventListener('error', (err) => reject(err));
          mediaObj.src = url;
      });

      async function renderProcessedOutput(encodedData,mediaType,outputFileExt) {
        if(typeof HTML5MediaTypes[outputFileExt.toLowerCase()] !== 'undefined') {
          try {
            let loadedMediaObj=await loadMedia(encodedData,mediaType);
            loadedMediaObj.setAttribute('controls','');
            await new Promise((resolve, reject) => setTimeout(resolve, 50));

            if(mediaType=='video') {
                let mediaObjHeight=loadedMediaObj.videoHeight;
                let mediaObjWidth=loadedMediaObj.videoWidth;

                mediaObjHeight=loadedMediaObj.videoHeight;
                mediaObjWidth=loadedMediaObj.videoWidth;

                let scaleRatio=parseFloat(displayedHeightVal/mediaObjHeight);
                let displayedHeight=scaleRatio*mediaObjHeight;
                let displayedWidth=scaleRatio*mediaObjWidth;
                loadedMediaObj['style']['height']=`${displayedHeight}px`;
                loadedMediaObj['style']['width']=`${displayedWidth}px`;
                loadedMediaObj['style']['margin']='0 auto';
                await new Promise((resolve, reject) => setTimeout(resolve, 50));
            }
            mediaWrapper.appendChild(loadedMediaObj);
          } catch(errMsg) {
            console.error(errMsg);
          }
        } else {
          let fillerDIV=document.createElement('div');
          fillerDIV.className='border';
          fillerDIV['style']['height']=`${displayedHeightVal}px`;
          fillerDIV['style']['width']=`${displayedHeightVal}px`;
          fillerDIV['style']['margin']='0 auto';

          fillerDIV.innerHTML='Content is not HTML5 compatible for display.';
          mediaWrapper.appendChild(fillerDIV);
        }
        return Promise.resolve('Conversion Success!');
      }

      uploadMedia.addEventListener('change', async(evt)=> {
        outputFileExtension.disabled=true;
        uploadMediaBtn.disabled=true;

        const outputFileMimeType=MimeTypeDisplay.innerHTML;
        const outputFileExt=FileExtDisplay.innerHTML;

        const file=evt.target.files[0];
        if (!file) return;
        let fileName=file.name;
        let fileType=file.type;
        let fileSizeInKB=parseInt(file.size/1024);
        let fileSizeInMB=((file.size/1024)/1024).toFixed(2);

        fileNameDisplay.innerHTML = fileName;
        fileTypeDisplay.innerHTML = fileType;
        fileSizeDisplay.innerHTML = `${fileSizeInKB} <strong class="symbol">𝚔𝙱</strong> <span class="symbol">≈</span> ${fileSizeInMB} <strong class="symbol">𝙼𝙱</strong>`;

        appendDataLog('Initialising FFmpeg.');
        const ffmpeg = FFmpeg.createFFmpeg({
          corePath: new URL('js/ffmpeg/ffmpeg-core.js', document.location).href,
          workerPath: new URL('js/ffmpeg/ffmpeg-core.worker.js', document.location).href,
          wasmPath: new URL('js/ffmpeg/ffmpeg-core.wasm', document.location).href,
          log: true
        });
        await ffmpeg.load();
        appendDataLog('FFmpeg has loaded.');

        appendDataLog('Reading input file.');
        let arrBuffer = await readFileAsArrayBuffer(file);
        let uInt8Array = new Uint8Array(arrBuffer);

        appendDataLog('Writing to input file.');
        ffmpeg.FS('writeFile', fileName, uInt8Array);

        appendDataLog('Transcoding input file to output file.');
        await ffmpeg.run('-i', fileName, `output${outputFileExt}`);

        // appendDataLog('Check if output file exists in the virtual files system.');
        // let toContinue = true;
        // while(toContinue) {
        //   const fileExists = ffmpeg.FS('readdir', '/').includes(`output${outputFileExt}`);
        //   console.log(fileExists);
        //   if(fileExists) {
        //     toContinue=false;
        //   }
        // }
        appendDataLog('Retrieving output file from virtual files system.');
        const data = ffmpeg.FS('readFile', `output${outputFileExt}`); // Uint8Array 

        let b64Str = convertBitArrtoB64(data);
        let encodedData=`data:${outputFileMimeType};base64,${b64Str}`;
        appendDataLog('File conversion has been successfully completed.');

        saveOutputBtn.disabled=false;
        saveOutputBtn.value=encodedData;

        let mediaType='audio';
        if(!outputFileMimeType.includes(mediaType)) {
          mediaType='video';
        }
        let status=await renderProcessedOutput(encodedData,mediaType,outputFileExt);
        appendDataLog(status);

        ffmpeg.FS('unlink', `output${outputFileExt}`);
        await new Promise((resolve, reject) => setTimeout(resolve, 50));
        ffmpeg.exit();
      });

      saveOutputBtn.addEventListener('click', async()=> {
        let dwnlnk = document.createElement('a');

        let fileName = fileNameDisplay.innerHTML;
        let outputFileExt = FileExtDisplay.innerHTML;
   
        let saveFilename = fileName.substr(0, fileName.lastIndexOf('.'));
        dwnlnk.download = `${saveFilename}${outputFileExt}`;
        dwnlnk.href = saveOutputBtn.value;
        dwnlnk.click();
      });

      function resetAll() {
        if (mediaWrapper.children.length>0) {
          mediaWrapper.removeChild(mediaWrapper.children[0]);
        }
        outputFileExtension.disabled=false;
        outputFileExtension.selectedIndex=0;
        triggerEvent(outputFileExtension, 'change');

        uploadMediaBtn.disabled=false;
        uploadMedia.value='';

        fileNameDisplay.innerHTML='<span class="symbol">…</span>';
        fileTypeDisplay.innerHTML='<span class="symbol">…</span>';
        fileSizeDisplay.innerHTML='<span class="symbol">…</span>';

        outputLogs.innerHTML='';

        saveOutputBtn.value='';
        saveOutputBtn.disabled=true;
      }

      resetAllBtn.addEventListener('click', async()=> {
        resetAll();
      });

  });
}