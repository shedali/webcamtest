
<style>

#videoElement {
  width: 200px;
  height: 200px;
  border-radius:100%;
}
</style>

<div id="container">
  <video autoplay="true" id="videoElement">
  </video>
</div>
<script>
import {onMount} from "svelte"
onMount(()=>{
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

})
</script>
