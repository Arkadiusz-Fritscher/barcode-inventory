<template>
  <div class="scanner">
    <div id="scanner"></div>

    <q-inner-loading
      :showing="!scannerStarted"
      label="Please wait..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getEntry from "src/api/getEntry";

let html5QrCode = null;
const availableCameras = ref([]);
const selectedCamera = ref(null);
const scannerStarted = ref(false);

function getCameras() {
  // This method will trigger user permissions
  html5QrCode = new Html5Qrcode("scanner");
  Html5Qrcode.getCameras()
    .then((devices) => {
      availableCameras.value = devices;

      if (devices && devices.length > 1) {
        devices.forEach((device) => {
          if (
            device.label.toLowerCase().includes("back") ||
            device.label.toLowerCase().includes("hint")
          ) {
            selectedCamera.value = device;
          } else {
            selectedCamera.value = devices.at(-1);
          }
        });
      }

      if (devices && devices.length === 1) {
        selectedCamera.value = devices.at(-1);
      }
    })
    .then(() => {
      createScanner();
    })
    .catch((err) => {
      // handle err
      console.error("ERROR: TheScanner.vue: getCameras() - ", err);
    });
}

function createScanner() {
  const options = {
    fps: 10,
    qrbox: { width: 250, height: 150 },
  };

  html5QrCode
    .start(
      selectedCamera.value.id,
      options,
      (decodedText, decodedResult) => {
        onScanSuccess(decodedText, decodedResult);
      },
      (errorMessage) => {
        // parse error, ignore it.
        onScanFailure(errorMessage);
      }
    )
    .then(() => {
      scannerStarted.value = true;
      html5QrCode.scannerPausedUiElement.classList.add(
        "scannerPausedUiElement"
      );

      const { videoHeight, videoWidth } = html5QrCode.videoElement;
      console.log(videoHeight, videoWidth);
      // document.querySelector(".scanner").style.height = `${videoHeight}px`;
      // document.querySelector(".scanner").style.width = `${videoWidth}px`;
      const aspect = videoHeight / videoWidth;
      const element = document.querySelector("#scanner > video");
      console.log(element.offsetHeight * aspect);
      document.querySelector(".scanner").style.height = `${
        element.offsetWidth * aspect
      }px`;

      console.log("status,", Html5QrcodeScannerState[html5QrCode.getState()]);
    })
    .catch((err) => {
      console.error("ERROR: TheScanner.vue: html5QrCode.start() - ", err);
    });
}

function onScanSuccess(decodedText, decodedResult) {
  // console.log("onScanSuccess", decodedText, decodedResult);
  html5QrCode.pause();
  asyncFct(decodedText);
}

function onScanFailure(error) {
  // console.log("onScanFailure", error);
}

const asyncFct = async (entry) => {
  const response = await getEntry("material", "ean", entry);
  console.log(response);
  alert(`${response.data[0].name}`);
  return response;
};

onMounted(() => {
  getCameras();
});
</script>

<style lang="scss" scoped>
video {
  max-inline-size: 100%;
  object-position: center;
  object-fit: contain;
}
.scanner {
  max-width: 560px;
  width: calc(95% - 32px);
  height: auto;
  aspect-ratio: auto 3 / 4;
  border: 1px solid black;
  background-color: white;
  position: relative;
  overflow: hidden;
}

.scannerPausedUiElement {
  background-color: red;
}
</style>
