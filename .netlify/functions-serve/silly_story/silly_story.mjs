
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
  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const name = urlParams.get("name") || "Bob";
  const unitSystem = urlParams.get("unitSystem") || "us";
  const temperature = 94;
  const weight = 300;
  let unitTemperature = "fahrenheit";
  let unitWeight = "pounds";
  let finalTemperature = temperature;
  let finalWeight = weight;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc2lsbHlfc3RvcnkubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJmdW5jdGlvbiByYW5kb21WYWx1ZUZyb21BcnJheShhcnJheSkge1xyXG4gIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XHJcbiAgcmV0dXJuIGFycmF5W3JhbmRvbV07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEpID0+IHtcclxuICBjb25zdCB4SXRlbXMgPSBbJ1dpbGx5IHRoZSBHb2JsaW4nLCAnQmlnIERhZGR5JywgJ0ZhdGhlciBDaHJpc3RtYXMnXTtcclxuICBjb25zdCB5SXRlbXMgPSBbJ3RoZSBzb3VwIGtpdGNoZW4nLCAnRGlzbmV5bGFuZCcsICd0aGUgV2hpdGUgSG91c2UnXTtcclxuICBjb25zdCB6SXRlbXMgPSBbJ3Nwb250YW5lb3VzbHkgY29tYnVzdGVkJywgJ21lbHRlZCBpbnRvIGEgcHVkZGxlIG9uIHRoZSBzaWRld2FsaycsICd0dXJuZWQgaW50byBhIHNsdWcgYW5kIGNyYXdsZWQgYXdheSddO1xyXG5cclxuICBjb25zdCBuZXdYSXRlbSA9IHJhbmRvbVZhbHVlRnJvbUFycmF5KHhJdGVtcyk7XHJcbiAgY29uc3QgbmV3WUl0ZW0gPSByYW5kb21WYWx1ZUZyb21BcnJheSh5SXRlbXMpO1xyXG4gIGNvbnN0IG5ld1pJdGVtID0gcmFuZG9tVmFsdWVGcm9tQXJyYXkoekl0ZW1zKTtcclxuXHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhyZXEudXJsLnNwbGl0KCc/JylbMV0pO1xyXG4gIGNvbnN0IG5hbWUgPSB1cmxQYXJhbXMuZ2V0KCduYW1lJykgfHwgJ0JvYic7ICBcclxuICBjb25zdCB1bml0U3lzdGVtID0gdXJsUGFyYW1zLmdldCgndW5pdFN5c3RlbScpIHx8ICd1cyc7IFxyXG5cclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IDk0O1xyXG4gIGNvbnN0IHdlaWdodCA9IDMwMDtcclxuICBsZXQgdW5pdFRlbXBlcmF0dXJlID0gJ2ZhaHJlbmhlaXQnO1xyXG4gIGxldCB1bml0V2VpZ2h0ID0gJ3BvdW5kcyc7XHJcbiAgbGV0IGZpbmFsVGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTtcclxuICBsZXQgZmluYWxXZWlnaHQgPSB3ZWlnaHQ7XHJcblxyXG4gIGlmICh1bml0U3lzdGVtID09PSAndWsnKSB7XHJcbiAgICAgIGZpbmFsVGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKCh0ZW1wZXJhdHVyZSAtIDMyKSAqICg1IC8gOSkpOyBcclxuICAgICAgdW5pdFRlbXBlcmF0dXJlID0gJ2NlbnRpZ3JhZGUnO1xyXG4gICAgICBmaW5hbFdlaWdodCA9IE1hdGgucm91bmQod2VpZ2h0IC8gMTQpOyBcclxuICAgICAgdW5pdFdlaWdodCA9ICdzdG9uZSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9yeSA9IFxyXG4gIGBJdCB3YXMgJHtmaW5hbFRlbXBlcmF0dXJlfSAke3VuaXRUZW1wZXJhdHVyZX0gb3V0c2lkZSwgc28gJHtuZXdYSXRlbX0gd2VudCBmb3IgYSB3YWxrLiBcclxuICBXaGVuIHRoZXkgZ290IHRvICR7bmV3WUl0ZW19LCB0aGV5IHN0YXJlZCBpbiBob3Jyb3IgZm9yIGEgZmV3IG1vbWVudHMsIHRoZW4gJHtuZXdaSXRlbX0uIFxyXG4gICR7bmFtZX0gc2F3IHRoZSB3aG9sZSB0aGluZywgYnV0IHdhcyBub3Qgc3VycHJpc2VkIFx1MjAxNCAke25ld1hJdGVtfSB3ZWlnaHMgJHtmaW5hbFdlaWdodH0gJHt1bml0V2VpZ2h0fSwgYW5kIGl0IHdhcyBhIGhvdCBkYXkuYDtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHsgbWVzc2FnZTogc3RvcnkgfTtcclxuXHJcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwge1xyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxTQUFTLHFCQUFxQixPQUFPO0FBQ25DLFFBQU0sU0FBUyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxNQUFNO0FBQ3RELFNBQU8sTUFBTSxNQUFNO0FBQ3JCO0FBRUEsSUFBTyxzQkFBUSxPQUFPLFFBQVE7QUFDNUIsUUFBTSxTQUFTLENBQUMsb0JBQW9CLGFBQWEsa0JBQWtCO0FBQ25FLFFBQU0sU0FBUyxDQUFDLG9CQUFvQixjQUFjLGlCQUFpQjtBQUNuRSxRQUFNLFNBQVMsQ0FBQywyQkFBMkIsd0NBQXdDLHFDQUFxQztBQUV4SCxRQUFNLFdBQVcscUJBQXFCLE1BQU07QUFDNUMsUUFBTSxXQUFXLHFCQUFxQixNQUFNO0FBQzVDLFFBQU0sV0FBVyxxQkFBcUIsTUFBTTtBQUU1QyxRQUFNLFlBQVksSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMzRCxRQUFNLE9BQU8sVUFBVSxJQUFJLE1BQU0sS0FBSztBQUN0QyxRQUFNLGFBQWEsVUFBVSxJQUFJLFlBQVksS0FBSztBQUVsRCxRQUFNLGNBQWM7QUFDcEIsUUFBTSxTQUFTO0FBQ2YsTUFBSSxrQkFBa0I7QUFDdEIsTUFBSSxhQUFhO0FBQ2pCLE1BQUksbUJBQW1CO0FBQ3ZCLE1BQUksY0FBYztBQUVsQixNQUFJLGVBQWUsTUFBTTtBQUNyQix1QkFBbUIsS0FBSyxPQUFPLGNBQWMsT0FBTyxJQUFJLEVBQUU7QUFDMUQsc0JBQWtCO0FBQ2xCLGtCQUFjLEtBQUssTUFBTSxTQUFTLEVBQUU7QUFDcEMsaUJBQWE7QUFBQSxFQUNqQjtBQUVBLFFBQU0sUUFDTixVQUFVLGdCQUFnQixJQUFJLGVBQWUsZ0JBQWdCLFFBQVE7QUFBQSxxQkFDbEQsUUFBUSxtREFBbUQsUUFBUTtBQUFBLElBQ3BGLElBQUksc0RBQWlELFFBQVEsV0FBVyxXQUFXLElBQUksVUFBVTtBQUVuRyxRQUFNLE9BQU8sRUFBRSxTQUFTLE1BQU07QUFFOUIsU0FBTyxJQUFJLFNBQVMsS0FBSyxVQUFVLElBQUksR0FBRztBQUFBLElBQ3RDLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsRUFDbEQsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
