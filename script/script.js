
  // finance moviments and date:Sample 
  const finances = [
    {date:"Jan-2010", profit: 87884},
    {date:"Feb-2010", profit: 984655},
    {date:"Mar-2010", profit: 322013},
    {date:"Apr-2010", profit: -69417},
    {date:"May-2010", profit: 310503},
    {date:"Jun-2010", profit: 522857},
    {date:"Jul-2010", profit: 103309},
    {date:"Aug-2010", profit: 604885},
    {date:"Sep-2010", profit: -21638},
    {date:"Oct-2010", profit: 477532},
    {date:"Nov-2010", profit: 893810},
    {date:"Dec-2010", profit: -80353},
    {date:"Jan-2011", profit: 779806},
    {date:"Feb-2011", profit: -33520},
    {date:"Mar-2011", profit: 697845},
    {date:"Apr-2011", profit: 793163},
    {date:"May-2011", profit: 485070},
    {date:"Jun-2011", profit: 584122},
    {date:"Jul-2011", profit: 62729},
    {date:"Aug-2011", profit: 668179},
    {date:"Sep-2011", profit: 899906},
    {date:"Oct-2011", profit: 834719},
    {date:"Nov-2011", profit: 132003},
    {date:"Dec-2011", profit: 309978},
    {date:"Jan-2012", profit: -75556},
    {date:"Feb-2012", profit: 1926159},
    {date:"Mar-2012", profit: 252788},
    {date:"Apr-2012", profit: 115151},
    {date:"May-2012", profit: 817256},
    {date:"Jun-2012", profit: 570757},
    {date:"Jul-2012", profit: 506702},
    {date:"Aug-2012", profit: -102254},
    {date:"Sep-2012", profit: 475062},
    {date:"Oct-2012", profit: 779976},
    {date:"Nov-2012", profit: 144175},
    {date:"Dec-2012", profit: 542494},
    {date:"Jan-2013", profit: 359333},
    {date:"Feb-2013", profit: 321469},
    {date:"Mar-2013", profit: 67780},
    {date:"Apr-2013", profit: 471435},
    {date:"May-2013", profit: 565603},
    {date:"Jun-2013", profit: 872480},
    {date:"Jul-2013", profit: 789480},
    {date:"Aug-2013", profit: 999942},
    {date:"Sep-2013", profit: -2196167},
    {date:"Oct-2013", profit: 268997},
    {date:"Nov-2013", profit: -68798},
    {date:"Dec-2013", profit: 115046},
    {date:"Jan-2014", profit: 682458},
    {date:"Feb-2014", profit: 617856},
    {date:"Mar-2014", profit: 824098},
    {date:"Apr-2014", profit: 581943},
    {date:"May-2014", profit: 132864},
    {date:"Jun-2014", profit: 448062},
    {date:"Jul-2014", profit: 689161},
    {date:"Aug-2014", profit: 800701},
    {date:"Sep-2014", profit: 116664},
    {date:"Oct-2014", profit: 947333},
    {date:"Nov-2014", profit: 578668},
    {date:"Dec-2014", profit: 988505},
    {date:"Jan-2015", profit: 113971},
    {date:"Feb-2015", profit: 102947},
    {date:"Mar-2015", profit: 687533},
    {date:"Apr-2015", profit: -52462},
    {date:"May-2015", profit: 158620},
    {date:"Jun-2015", profit: 87795},
    {date:"Jul-2015", profit: 423389},
    {date:"Aug-2015", profit: 840723},
    {date:"Sep-2015", profit: 568529},
    {date:"Oct-2015", profit: 332067},
    {date:"Nov-2015", profit: 989499},
    {date:"Dec-2015", profit: 778237},
    {date:"Jan-2016", profit: 650000},
    {date:"Feb-2016", profit: -110037},
    {date:"Mar-2016", profit: -17494},
    {date:"Apr-2016", profit: 757143},
    {date:"May-2016", profit: 445709},
    {date:"Jun-2016", profit: 712961},
    {date:"Jul-2016", profit: -116377},
    {date:"Aug-2016", profit: 569899},
    {date:"Sep-2016", profit: 768450},
    {date:"Oct-2016", profit: 102685},
    {date:"Nov-2016", profit: 795914},
    {date:"Dec-2016", profit: 60988},
    {date:"Jan-2017", profit: 138230},
    {date:"Feb-2017", profit: 671099}
];

  function compute(){

  // Calculate the total number of months in the dataset
  const totalMonths = finances.length;
  
  // Calculate the net total profit over the entire period
  let totalProfit = 0;
  for (const record of finances) {
    totalProfit += record.profit;
    // totalProfit += finances.length * record.profit;
  }
  
  // Calculate the average profit change over the entire period
  let averageChange = 0;
  let previousProfit = 0;
  for (const record of finances) {
    // Calculate the change in profit from the previous month
    const profitChange = record.profit - previousProfit;
  
    // Add the profit change to the average
    averageChange += profitChange;
  
    // Update the previous profit for the next iteration
    previousProfit = record.profit;
  }
  
  // Divide the total change by the number of months to get the average
  averageChange /= totalMonths;
  
  // Initialize the variables for the greatest increase and decrease
  let greatestIncrease = { date: null, profit: 0 };
  let greatestDecrease = { date: null, profit: 0 };
  
  // Loop through the data again to find the greatest increase and decrease
  for (const record of finances) {
    // Update the greatest increase if necessary
    if (record.profit > greatestIncrease.profit) {
      greatestIncrease.date = record.date;
      greatestIncrease.profit = record.profit;
    }
  
    // Update the greatest decrease if necessary
    if (record.profit < greatestDecrease.profit) {
      greatestDecrease.date = record.date;
      greatestDecrease.profit = record.profit;
    }
  }

// Using DOM instances to return the result for the use on html

  months.innerHTML = totalMonths;
  profit.innerHTML = totalProfit;
  average.innerHTML = averageChange;
  increase.innerHTML = ( greatestIncrease.date + " (" + greatestIncrease.profit + ")");
  decrease.innerHTML = ( greatestDecrease.date + "(" + greatestDecrease.profit +")");

  // Print the results on the console
  console.log("Financial Analysis");
  console.log("-------------------------------");
  console.log("Total months: " + totalMonths);
  console.log("Total profit: " + totalProfit);
  console.log("Average change: " + averageChange);
  console.log(greatestIncrease.date + " (" + greatestIncrease.profit + ")");
  console.log(greatestDecrease.date + "(" + greatestDecrease.profit +")");

}
  
 
  