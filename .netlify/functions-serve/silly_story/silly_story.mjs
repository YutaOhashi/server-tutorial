
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/silly_story.mjs
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
var silly_story_default = async (req) => {
  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
  const newXItem = randomValueFromArray(xItems);
  const newYItem = randomValueFromArray(yItems);
  const newZItem = randomValueFromArray(zItems);
  const temperature = 94;
  const weight = 300;
  let unitTemperature = "fahrenheit";
  let unitWeight = "pounds";
  let finalTemperature = temperature;
  let finalWeight = weight;
  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const name = urlParams.get("name") || "Bob";
  const unitSystem = urlParams.get("unitSystem") || "us";
  if (unitSystem === "uk") {
    finalTemperature = Math.round((temperature - 32) * (5 / 9));
    unitTemperature = "centigrade";
    finalWeight = Math.round(weight / 14);
    unitWeight = "stone";
  }
  const story = `It was ${finalTemperature} ${unitTemperature} outside, so ${newXItem} went for a walk. 
    When they got to ${newYItem}, they stared in horror for a few moments, then ${newZItem}. 
    ${name} saw the whole thing, but was not surprised \u2014 ${newXItem} weighs ${finalWeight} ${unitWeight}, and it was a hot day.`;
  const data = { message: story };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
export {
  silly_story_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc2lsbHlfc3RvcnkubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJmdW5jdGlvbiByYW5kb21WYWx1ZUZyb21BcnJheShhcnJheSkge1xyXG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcclxuICAgIHJldHVybiBhcnJheVtyYW5kb21dO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxKSA9PiB7XHJcbiAgICBjb25zdCB4SXRlbXMgPSBbJ1dpbGx5IHRoZSBHb2JsaW4nLCAnQmlnIERhZGR5JywgJ0ZhdGhlciBDaHJpc3RtYXMnXTtcclxuICAgIGNvbnN0IHlJdGVtcyA9IFsndGhlIHNvdXAga2l0Y2hlbicsICdEaXNuZXlsYW5kJywgJ3RoZSBXaGl0ZSBIb3VzZSddO1xyXG4gICAgY29uc3Qgekl0ZW1zID0gWydzcG9udGFuZW91c2x5IGNvbWJ1c3RlZCcsICdtZWx0ZWQgaW50byBhIHB1ZGRsZSBvbiB0aGUgc2lkZXdhbGsnLCAndHVybmVkIGludG8gYSBzbHVnIGFuZCBjcmF3bGVkIGF3YXknXTtcclxuICBcclxuICAgIGNvbnN0IG5ld1hJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoeEl0ZW1zKTtcclxuICAgIGNvbnN0IG5ld1lJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoeUl0ZW1zKTtcclxuICAgIGNvbnN0IG5ld1pJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoekl0ZW1zKTtcclxuICBcclxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gOTQ7XHJcbiAgICBjb25zdCB3ZWlnaHQgPSAzMDA7XHJcbiAgICBsZXQgdW5pdFRlbXBlcmF0dXJlID0gJ2ZhaHJlbmhlaXQnO1xyXG4gICAgbGV0IHVuaXRXZWlnaHQgPSAncG91bmRzJztcclxuICAgIGxldCBmaW5hbFRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgICBsZXQgZmluYWxXZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgXHJcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJlcS51cmwuc3BsaXQoJz8nKVsxXSk7XHJcbiAgICBjb25zdCBuYW1lID0gdXJsUGFyYW1zLmdldCgnbmFtZScpIHx8ICdCb2InOyAgXHJcbiAgICBjb25zdCB1bml0U3lzdGVtID0gdXJsUGFyYW1zLmdldCgndW5pdFN5c3RlbScpIHx8ICd1cyc7IFxyXG4gIFxyXG4gICAgaWYgKHVuaXRTeXN0ZW0gPT09ICd1aycpIHtcclxuICAgICAgZmluYWxUZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoKHRlbXBlcmF0dXJlIC0gMzIpICogKDUgLyA5KSk7IFxyXG4gICAgICB1bml0VGVtcGVyYXR1cmUgPSAnY2VudGlncmFkZSc7XHJcbiAgICAgIGZpbmFsV2VpZ2h0ID0gTWF0aC5yb3VuZCh3ZWlnaHQgLyAxNCk7IFxyXG4gICAgICB1bml0V2VpZ2h0ID0gJ3N0b25lJztcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHN0b3J5ID0gXHJcbiAgICBgSXQgd2FzICR7ZmluYWxUZW1wZXJhdHVyZX0gJHt1bml0VGVtcGVyYXR1cmV9IG91dHNpZGUsIHNvICR7bmV3WEl0ZW19IHdlbnQgZm9yIGEgd2Fsay4gXHJcbiAgICBXaGVuIHRoZXkgZ290IHRvICR7bmV3WUl0ZW19LCB0aGV5IHN0YXJlZCBpbiBob3Jyb3IgZm9yIGEgZmV3IG1vbWVudHMsIHRoZW4gJHtuZXdaSXRlbX0uIFxyXG4gICAgJHtuYW1lfSBzYXcgdGhlIHdob2xlIHRoaW5nLCBidXQgd2FzIG5vdCBzdXJwcmlzZWQgXHUyMDE0ICR7bmV3WEl0ZW19IHdlaWdocyAke2ZpbmFsV2VpZ2h0fSAke3VuaXRXZWlnaHR9LCBhbmQgaXQgd2FzIGEgaG90IGRheS5gO1xyXG4gIFxyXG4gICAgY29uc3QgZGF0YSA9IHsgbWVzc2FnZTogc3RvcnkgfTtcclxuICBcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgfSk7XHJcbn07Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBLFNBQVMscUJBQXFCLE9BQU87QUFDakMsUUFBTSxTQUFTLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLE1BQU07QUFDdEQsU0FBTyxNQUFNLE1BQU07QUFDckI7QUFFQSxJQUFPLHNCQUFRLE9BQU8sUUFBUTtBQUM1QixRQUFNLFNBQVMsQ0FBQyxvQkFBb0IsYUFBYSxrQkFBa0I7QUFDbkUsUUFBTSxTQUFTLENBQUMsb0JBQW9CLGNBQWMsaUJBQWlCO0FBQ25FLFFBQU0sU0FBUyxDQUFDLDJCQUEyQix3Q0FBd0MscUNBQXFDO0FBRXhILFFBQU0sV0FBVyxxQkFBcUIsTUFBTTtBQUM1QyxRQUFNLFdBQVcscUJBQXFCLE1BQU07QUFDNUMsUUFBTSxXQUFXLHFCQUFxQixNQUFNO0FBRTVDLFFBQU0sY0FBYztBQUNwQixRQUFNLFNBQVM7QUFDZixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLGFBQWE7QUFDakIsTUFBSSxtQkFBbUI7QUFDdkIsTUFBSSxjQUFjO0FBRWxCLFFBQU0sWUFBWSxJQUFJLGdCQUFnQixJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNELFFBQU0sT0FBTyxVQUFVLElBQUksTUFBTSxLQUFLO0FBQ3RDLFFBQU0sYUFBYSxVQUFVLElBQUksWUFBWSxLQUFLO0FBRWxELE1BQUksZUFBZSxNQUFNO0FBQ3ZCLHVCQUFtQixLQUFLLE9BQU8sY0FBYyxPQUFPLElBQUksRUFBRTtBQUMxRCxzQkFBa0I7QUFDbEIsa0JBQWMsS0FBSyxNQUFNLFNBQVMsRUFBRTtBQUNwQyxpQkFBYTtBQUFBLEVBQ2Y7QUFFQSxRQUFNLFFBQ04sVUFBVSxnQkFBZ0IsSUFBSSxlQUFlLGdCQUFnQixRQUFRO0FBQUEsdUJBQ2xELFFBQVEsbURBQW1ELFFBQVE7QUFBQSxNQUNwRixJQUFJLHNEQUFpRCxRQUFRLFdBQVcsV0FBVyxJQUFJLFVBQVU7QUFFbkcsUUFBTSxPQUFPLEVBQUUsU0FBUyxNQUFNO0FBRTlCLFNBQU8sSUFBSSxTQUFTLEtBQUssVUFBVSxJQUFJLEdBQUc7QUFBQSxJQUN4QyxTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLEVBQ2hELENBQUM7QUFDTDsiLAogICJuYW1lcyI6IFtdCn0K
