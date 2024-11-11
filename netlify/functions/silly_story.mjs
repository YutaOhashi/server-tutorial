function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }
  
  export default async (req) => {
    const xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
    const zItems = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
  
    const newXItem = randomValueFromArray(xItems);
    const newYItem = randomValueFromArray(yItems);
    const newZItem = randomValueFromArray(zItems);
  
    const temperature = 94;
    const weight = 300;
    let unitTemperature = 'fahrenheit';
    let unitWeight = 'pounds';
    let finalTemperature = temperature;
    let finalWeight = weight;
  
    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const name = urlParams.get('name') || 'Bob';  
    const unitSystem = urlParams.get('unitSystem') || 'us'; 
  
    if (unitSystem === 'uk') {
      finalTemperature = Math.round((temperature - 32) * (5 / 9)); 
      unitTemperature = 'centigrade';
      finalWeight = Math.round(weight / 14); 
      unitWeight = 'stone';
    }
  
    const story = 
    `It was ${finalTemperature} ${unitTemperature} outside, so ${newXItem} went for a walk. 
    When they got to ${newYItem}, they stared in horror for a few moments, then ${newZItem}. 
    ${name} saw the whole thing, but was not surprised — ${newXItem} weighs ${finalWeight} ${unitWeight}, and it was a hot day.`;
  
    const data = { message: story };
  
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
};