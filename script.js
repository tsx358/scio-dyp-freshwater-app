const cardTerms=[
    ["Strahler Stream Order","Resulting stream order is 1 higher than previous."],
    ["Shreve Stream Order","Resulting stream order is sum of two previous orders."],
    ["Hack's Stream Order", "Classic stream order. Main stream has '1'."],

    ["Dendritic Drainage Pattern", "looks like tree roots. Above homogeneous bedrock."],
    ["Parallel Drainage Pattern", "form where there's large hill. Develop in areas with parallel regions of rock that's harder to erode."],
    ["Trellis Drainage Pattern", "form where there's folded topography. Tributaries enter main stream at near Rt angles."],
    ["Rectangular Drainage Pattern","in regions undergone faulting. Streams follow path of least resistance."],
    ["Radial Drainage Pattern","develop around central point. flows outward."],
    ["Centripedal Drainage Pattern","flow downward to central point."],
    ["Deranged/Contorted Drainage Pattern","disruption from pre-existing drainage pattern. "],
  ["Annular Drainage Pattern"," form where streams follow a roughly circular/concentric path along belt of weak rock. Ringlike pattern."],

    ["Natural Levee","deposit of sand/mud built up along+ sloping away from, either side of flood plain of river/stream."],
    ["Point bar","alluvial deposit that forms by accumulation on inner side of expanding loop of river."],
    ["Neck", "point of land between 2 edges of meanders"],
    ["Delta Classifications","Constructional: river-dominated, elongate, lobate (leaf like); Destructional: tide/wave-dominated, cuspate (tooth-like shape)"],

    //random terms to know 
    ["Playas","Dry lake beds in desert regions."],
    ["Yazoo","tributary that runs parallel to river."],
    ["Esker","long ridge of stratified sediments; having a winding course, deposited by meltwater from retreating glacier/ice sheet."],
    ["Fjord","fiord. Long, narrow inlet with steep sides/cliffs, created by glacier."],
    ["Eyots","little islands on lakes/rivers. Separates braided channels."],
    ["Kame","steep-sided mound of sand and gravel deposited by a melting ice sheet."],

    ["Gully Erosion","removal of soil along drainage lines by surface water runoff."],

  ["Stream Piracy","when water from one stream is captured by another stream with a lower base level."],

    ["Hydraulic radius","measure of channel flow efficiency. Decreases when channel efficiency decreases. Area/(wetted Perimeter)"]
    
  ];

const cardImgs=[
    "strahlerStreamOrd.png",
    "shreveStreamOrd.png",
    "hackStreamOrd.png",

    "dendriticDS.png",
    "parallelDS.png",
    "trellisDS.png",
    "rectangDS.png",
    "radialDS.png",
    "centripetalDS.png",
    "derangedDS.png",
  "annular.png",

    "naturallevee.png",
    "pointbar.png",
    "neck.png",
    "deltaClassif.png",
    
    //random terms to know
    "playas.png",
    "yazoo.png",
    "esker.png",
    "fjord.png",
    "eyot.png",
    "kame.png",

    "gullyerosion.png",
  "streampiracy.png",

    "hydraulicradius.png",
    
    
  ];


function generate(){
  var i = Math.floor((cardTerms.length)*Math.random());
  document.getElementById("questionSide").innerHTML =  cardTerms[i][0];
  document.getElementById("ansSide").innerHTML =  cardTerms[i][1];
  const img=document.getElementById("image");
  img.src="images/"+ cardImgs[i];
}
  
  
function toggle() {
  var x = document.getElementById("allInfo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

