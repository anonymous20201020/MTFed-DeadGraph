function type(d) {
    /*
    age: "58.04"
    biomarker1_albumin: "30"
    biomarker2_k: "3.0"
    cluster: "29"
    death_risk: "0.0683371298405467"
    id: "0"
    importance_of_biomarker1_albumin: "0.8"
    importance_of_biomarker2_k: "0.2"
    patient: "98"
    posX: "0.11872752010822296"
    posY: "0.0016297217225655913"*/
    d.im={};
    d.age=+d.age;
    d.prevAge=-1;
    d.prevLOS=-1
    d.prevIndex=-1;
    d.biomarker1_albumin=+d.biomarker1_albumin;
    d.biomarker2_k=+d.biomarker2_k;
    d.cluster=+d.cluster;
    d.los=+d.los;
    d.death_risk=+d.death_risk + 0.05;
    d.dead =+d.dead;
    d.id=+d.id;
    d.importance_of_biomarker1_albumin=+d.importance_of_biomarker1_albumin;
    d.importance_of_biomarker2_k=+d.importance_of_biomarker2_k;
    d.patient=+d.patient;
    d.posX=+d.posX;
    d.posY=+d.posY;
    d.im['HCO3']=+d['im_HCO3'];
    d.im['pH']=+d['im_pH'];
    d.im['BUN']=+d['im_BUN'];
    d.im['Alkalinephos']=+d['im_Alkalinephos'];
    d.im['Calcium']=+d['im_Calcium'];
    d.im['Chloride']=+d['im_Chloride'];
    d.im['Creatinine']=+d['im_Creatinine'];
    d.im['Bilirubin_direct']=+d['im_Bilirubin_direct'];
    d.im['Glucose']=+d['im_Glucose'];
    d.im['Potassium']=+d['im_Potassium'];
    d.im['Bilirubin_total']=+d['im_Bilirubin_total'];
    d.im['TroponinI']=+d['im_TroponinI'];
    d.im['Hct']=+d['im_Hct'];
    d.im['Hgb']=+d['im_Hgb'];
    d.im['Fibrinogen']=+d['im_Fibrinogen'];
    d.im['Platelets']=+d['im_Platelets'];
    d.im['WBC']=+d['im_WBC'];
    d.im['PTT']=+d['im_PTT'];
    d.im['AST']=+d['im_AST'];
    d.im['Lactate']=+d['im_Lactate'];
    d.im['Magnesium']=+d['im_Magnesium'];
    d.im['TP']=+d['im_TP'];
    d.im['albumin']=+d['im_albumin'];
    d.im['AP']=+d['im_AP'];
    d.im['EOS']=+d['im_EOS'];
    d.im['NEU']=+d['im_NEU'];
    d.im['VPM']=+d['im_VPM'];
    d.im['ferritin']=+d['im_ferritin'];
    d.im['LIN%']=+d['im_LIN%'];
    d.im['MONO']=+d['im_MONO'];
    d.im['GGT']=+d['im_GGT'];
    d.im['BAS']=+d['im_BAS'];
    d.im['HR']=+d['im_HR'];
    d.im['O2Sat']=+d['im_O2Sat'];
    d.im['Temp']=+d['im_Temp'];
    d.im['SBP']=+d['im_SBP'];
    d.im['MAP']=+d['im_MAP'];
    d.im['DBP']=+d['im_DBP'];
    d.im['Resp']=+d['im_Resp'];
    d.im['EtCO2']=+d['im_EtCO2'];
    d.im['BaseExcess']=+d['im_BaseExcess'];
    d.im['FiO2']=+d['im_FiO2'];
    d.im['PaCO2']=+d['im_PaCO2'];
    d.im['SaO2']=+d['im_SaO2'];
    d.im['Phosphate']=+d['im_Phosphate'];
    d.im['Procalcitonin']=+d['im_Procalcitonin'];
    d.im['Eosinophils(%)']=+d['im_Eosinophils(%)'];
    d.im['IL-2R']=+d['im_IL-2R'];
    d.im['basophil(%)']=+d['im_basophil(%)'];
    d.im['Interleukin_10']=+d['im_Interleukin_10'];
    d.im['Monocytes(%)']=+d['im_Monocytes(%)'];
    d.im['Antithrombin']=+d['im_Antithrombin'];
    d.im['Interleukin_8']=+d['im_Interleukin_8'];
    d.im['Indirect_bilirubin']=+d['im_Indirect_bilirubin'];
    d.im['RDW']=+d['im_RDW'];
    d.im['neutrophils(%)']=+d['im_neutrophils(%)'];
    d.im['total_protein']=+d['im_total_protein'];
    d.im['Quantification_of_TP_antibodies']=+d['im_Quantification_of_TP_antibodies'];
    d.im['HBsAg']=+d['im_HBsAg'];
    d.im['MCV']=+d['im_MCV'];
    d.im['Tumor_necrosis_factorα']=+d['im_Tumor_necrosis_factorα'];
    d.im['MCHC']=+d['im_MCHC'];
    d.im['Interleukin_1β']=+d['im_Interleukin_1β'];
    d.im['lymphocyte_count']=+d['im_lymphocyte_count'];
    d.im['RBC']=+d['im_RBC'];
    d.im['Corrected_calcium']=+d['im_Corrected_calcium'];
    d.im['RBC_distribution_width_SD']=+d['im_RBC_distribution_width_SD'];
    d.im['Thrombin_time']=+d['im_Thrombin_time'];
    d.im['HCV_antibody_quantification']=+d['im_HCV_antibody_quantification'];
    d.im['D-D_dimer']=+d['im_D-D_dimer'];
    d.im['Total_cholesterol']=+d['im_Total_cholesterol'];
    d.im['AST']=+d['im_AST'];
    d.im['Uric_acid']=+d['im_Uric_acid'];
    d.im['NT-proBNP']=+d['im_NT-proBNP'];
    d.im['Lactate_dehydrogenase']=+d['im_Lactate_dehydrogenase'];
    d.im['P-LCR']=+d['im_P-LCR'];
    d.im['Interleukin_6']=+d['im_Interleukin_6'];
    d.im['FDP']=+d['im_FDP'];
    d.im['PLT_distribution_width']=+d['im_PLT_distribution_width'];
    d.im['globulin']=+d['im_globulin'];
    d.im['International_standard_ratio']=+d['im_International_standard_ratio'];
    d.im['2019-nCoV']=+d['im_2019-nCoV'];
    d.im['mean_corpuscular_hemoglobin_']=+d['im_mean_corpuscular_hemoglobin_'];
    d.im['HsCRP']=+d['im_HsCRP'];
    d.im['HIV_antibody_quantification']=+d['im_HIV_antibody_quantification'];
    d.im['serum_sodium']=+d['im_serum_sodium'];
    d.im['thrombocytocrit']=+d['im_thrombocytocrit'];
    d.im['ESR']=+d['im_ESR'];
    d.im['GPT']=+d['im_GPT'];
    d.im['eGFR']=+d['im_eGFR'];
    d.im['VCM']=+d['im_VCM'];
    d.im['HCM']=+d['im_HCM'];
    d.im['LIN']=+d['im_LIN'];
    d.im['HEM']=+d['im_HEM'];
    d.im['CHCM']=+d['im_CHCM'];
    d.im['NEU%']=+d['im_NEU%'];
    d.im['LEUC']=+d['im_LEUC'];
    d.im['ADW']=+d['im_ADW'];
    d.im['NA']=+d['im_NA'];
    d.im['BAS%']=+d['im_BAS%'];
    d.im['MONO%']=+d['im_MONO%'];
    d.im['EOS%']=+d['im_EOS%'];
    d.im['PCR']=+d['im_PCR'];
    d.im['LDH']=+d['im_LDH'];
    d.im['GPT']=+d['im_GPT'];
    d.im['DD']=+d['im_DD'];
    d.im['INR']=+d['im_INR'];
    d.im['APTT']=+d['im_APTT'];
    d.im['PO2']=+d['im_PO2'];
    d.im['PCO2']=+d['im_PCO2'];
    d.im['BEecf']=+d['im_BEecf'];
    d.im['BE(b)']=+d['im_BE(b)'];
    d.im['TCO2']=+d['im_TCO2'];
    d.im['SO2C']=+d['im_SO2C'];
    d.im['CK']=+d['im_CK'];
    d.im['CA++']=+d['im_CA++'];
    d.im['FOS']=+d['im_FOS'];
    d.im['AMI']=+d['im_AMI'];
    d.im['PH']=+d['im_PH'];
    d.im['BE(b)']=+d['im_BE(b)'];
    d.im['HCO3']=+d['im_HCO3'];
    d.im['PO2']=+d['im_PO2'];
    d.im['BEecf']=+d['im_BEecf'];
    d.im['PCO2']=+d['im_PCO2'];
    d.im['SO2C']=+d['im_SO2C'];
    d.im['TCO2']=+d['im_TCO2'];
    d.ima=[];
    for(var index in d.im)d.ima.push([index,d.im[index]]);
    d.ima.sort(function (a,b) { return -a[1]+b[1]; });
    console.log('d.ima', d.ima)
    return d;
}
var clu_info;
var cluster;
var patients=[];
var patientsObjs={};
var los = [];
var minlos = 99999;
var maxlos = 0;
var ages=[];
var minage=99999;
var maxage=0;
var playStatus=0;
var line=d3.svg.line().interpolate("cardinal");

function getColorofPatient(p){
    return d3.hsl(parseInt(300*(patients.indexOf(p)/patients.length)),0.5,0.6)
}
function getColorbyDeathRisk(r){
    return d3.rgb(parseInt(255*Math.sqrt(r)),parseInt(255-255*Math.sqrt(r)),0)
}

d3.csv("clu_info_outcome.csv",type,function (err,data) {
    if(err){
        alert("clu_info: error loading data");
        return;
    }
    console.log(data);
    clu_info=data;
    var k=0;
    var lastSeenPoint={};
    drawAxis();
    for(var i=0;i<clu_info.length;i++){
        var d=clu_info[i];
        if(patients.indexOf(d.patient)==-1) {
            patients[k] = d.patient;
            patientsObjs[d.patient]={path:[],firstDate:-1,deathDate:-1};
            patientsObjs[d.patient].path.push([xScale(d.posX),yScale(d.posY)]);
            k++;
            clu_info[i].prevLOS=d.los;
            patientsObjs[d.patient].firstDate=d.los;
            patientsObjs[d.patient].deathDate=d.los;
        }else {
            clu_info[i].prevLOS=clu_info[lastSeenPoint[d.patient]].los;
            clu_info[i].prevIndex=lastSeenPoint[d.patient];
            patientsObjs[d.patient].path.push([xScale(d.posX),yScale(d.posY)]);
            patientsObjs[d.patient].deathDate=d.los;
        }
        lastSeenPoint[d.patient]=i;
    };

    d3.csv("cluster.csv",function (err,data) {

        if (err) {
            alert("cluster: error loading data");
            return;
        }
        //console.log(data);
        cluster=data;

        drawCluster();
        drawLine();
        drawPoint();
        drawControl();
    });
});
var width = window.innerWidth-16, height = window.innerHeight-16;

//d3.select('.container0').style("width",width+"px").style("height",height+"px");
var padding = { top: 50, right: 50, bottom: 50, left: 50 };
// 创建一个分组用来组合要画的图表元素
var panelW=350;
var panelH=200;
var main = d3.select('#gdata')
    // 设置该分组的transform属性
    .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');
var control=d3.select("#controlsvg");
var xScale;
var yScale;
function drawAxis() {
    var minX=0;
    var maxX=0;
    var minY=0;
    var maxY=0;

    var width=document.getElementById("mainsvg").width.baseVal.value;
    var height=document.getElementById("mainsvg").height.baseVal.value;
    for(var i=0;i<clu_info.length;i++){
        var d=clu_info[i];
        minX=(minX>d.posX)?d.posX:minX;
        maxX=(maxX<d.posX)?d.posX:maxX;
        minY=(minY>d.posY)?d.posY:minY;
        maxY=(maxY<d.posY)?d.posY:maxY;
        
        minlos=(minlos>d.los)?d.los:minlos;
        maxlos=(maxlos<d.los)?d.los:maxlos;
    }
    xScale = d3.scale.linear()
        .domain([minX, maxX])
        .range([0, width - padding.left - padding.right]);
// 创建y轴的比例尺
    yScale = d3.scale.linear()
        .domain([minY, maxY])
        .range([height - padding.top - padding.bottom, 0]);
// 创建x轴
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom');
// 创建y轴
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');
// 把x轴应用到对应的SVG元素上
    main.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
        .call(xAxis);
// 把y轴应用到对应的SVG元素上
    main.append('g')
        .attr('class', 'axis')
        .call(yAxis);
}

function clearPoint() {
    main.selectAll('.point').remove();
}
function drawPoint(){
    var width=document.getElementById("mainsvg").width.baseVal.value;
    var height=document.getElementById("mainsvg").height.baseVal.value;
    main.selectAll('.point').data(clu_info).enter()
        .append('circle').attr('class','point')
        .attr('cx',function (d) {
            return xScale(d.posX)
        })
        .attr('cy',function (d) {
            return yScale(d.posY)
        })
        .attr('r',3)
        .style('fill',function (d){
            return getColorbyDeathRisk(d.death_risk);
        })
        .style('fill-opacity','0.5')
        .style('stroke-width',0)
        .on("mouseover",function (d,i) {
            filterbyPatient(d.patient);
            d3.select("#panelInfo1").text("Patient："+d.patient);
            d3.select("#panelInfo2").text("LOS："+(-d.los));
            d3.select("#panelInfo3").text("Cluster："+d.cluster);
            d3.select("#infoPanel").attr("transform","translate("+((xScale(d.posX)+50-panelW-20)>0?(xScale(d.posX)+50-panelW-20):(xScale(d.posX)+50+20))+","+((yScale(d.posY)+50-panelH-20)>0?(yScale(d.posY)+50-panelH-20):(yScale(d.posY)+50+20))+")").attr("display","");
            d3.select("#panelCNum1").text(d.ima[0][1].toFixed(3));
            d3.select("#panelCNum2").text(d.ima[1][1].toFixed(3));
            d3.select("#panelCNum3").text(d.ima[2][1].toFixed(3));
            d3.select("#panelCInfo1").text(d.ima[0][0]);
            d3.select("#panelCInfo2").text(d.ima[1][0]);
            d3.select("#panelCInfo3").text(d.ima[2][0]);
            d3.select("#panelCircle1").attr("r",d.ima[0][1]*100);
            d3.select("#panelCircle2").attr("r",d.ima[1][1]*100);
            d3.select("#panelCircle3").attr("r",d.ima[2][1]*100);
        })
        .on("mouseout",function (d,i) {

            // d3.select("#panelInfo1").text("");
            // d3.select("#panelInfo2").text("");
            // d3.select("#panelInfo3").text("");
            d3.select("#infoPanel").attr("display","none");
            filterbyPatientCancel(d.patient);
        });
    main.selectAll('.point').filter(function(dd,i){return dd.dead==1})
        .style('stroke',d3.rgb(0,0,0))
        .style('stroke-width',1)
        .style('stroke-opacity',1);
/*
    main.selectAll('.point')
        .on("mouseover",function(d,i){
            d3.select(this)
                .transition()
                .duration(100)
                .attr('r',10);
        })
        .on("mouseout",function(d,i){
            d3.select(this)
                .transition()
                .duration(100)
                .attr('r',1);
        });*/
}
var mouseoverPatientCount=0;
function drawControl() {
    for (var yy=Math.floor(minlos);yy<Math.ceil(maxlos);yy++)
        for (var mm=1;mm<=12;mm++)los[los.length]=yy+0.01*mm;
    var width=document.getElementById("mainsvg").width.baseVal.value;
    var height=document.getElementById("mainsvg").height.baseVal.value;
    control.selectAll('.patientRect').data(patients).enter()
        .append('rect').attr('class','patientRect')
        .attr('x',function (d) {
            return patients.indexOf(d)*width/patients.length;
        })
        .attr('y',40).attr('width',1.0*width/patients.length).attr('height',20)
        .style('fill',function (d){
        return getColorofPatient(d);
        })
        .on("mouseover",function (d,i) {
            //console.log(d);
            d3.select("#textInfo1").text("Patient："+d);
            filterbyPatient(d);
        })
        .on("mouseout",function (d,i) {
            //console.log(d);
            d3.select("#textInfo1").text("");
            filterbyPatientCancel(d);
        });

    control.selectAll('.losRect').data(los).enter()
        .append('rect').attr('class','losRect')
        .attr('x',function (d) {
            return los.indexOf(d)*width/los.length;
        })
        .attr('y',100).attr('width',1.0*width/los.length).attr('height',20)
        .style('fill','cyan')
        .on("mouseover",function (d,i) {
            //console.log(d);
            d3.select("#textInfo1").text("LOS："+(-d));
            filterbyLOS(d);
            })
        .on("mouseout",function (d,i) {
            //console.log(d);

            d3.select("#textInfo1").text("");
            filterbyLOSCancel(d);
        });

}
function filterbyPatient(d){
    if(mouseoverPatientCount==0) {
        main.selectAll(".point").filter(function (dd, i) {
            return dd.patient != d
        }).attr("display","none");
        main.selectAll(".line").filter(function (dd, i) {
            return dd != d
        }).attr("display","none");
    }
    mouseoverPatientCount++;
    main.selectAll(".point").filter(function(dd,i){return dd.patient==d}).style('fill-opacity','0.9').style('stroke-opacity','0.9').attr("display","");
    main.selectAll(".line").filter(function(dd,i){return dd==d}).style('stroke-opacity','0.9').attr("display","");
}
function filterbyPatientCancel(d){

    main.selectAll(".point").filter(function(dd,i){return dd.patient==d}).attr("display","none");
    main.selectAll(".line").filter(function(dd,i){return dd==d}).attr("display","none");
    setTimeout(function () {
        mouseoverPatientCount--;
        if(mouseoverPatientCount==0) {
            //console.log('called');


            main.selectAll(".point").style('fill-opacity', '0.5').style('stroke-opacity', '0.5').attr("display","");
            main.selectAll(".line").style('stroke-opacity', '0.5').attr("display","");
        }
    },10);
}

function filterbyLOS(d) {
    if(mouseoverPatientCount==0) {
        main.selectAll(".point").filter(function (dd, i) {
            return dd.los != d
        }).attr("display","none");
    }
    mouseoverPatientCount++;
    main.selectAll(".point").filter(function(dd,i){return dd.los>=d&&dd.prevLOS<d}).style('fill-opacity',0.9).style('stroke-opacity',0.9).attr("display","");
    main.selectAll(".line").filter(function (dd,i) {return patientsObjs[dd].firstDate<=d&&patientsObjs[dd].deathDate>=d}).style('stroke-opacity','0.5').attr("display","");
    main.selectAll(".line").filter(function (dd,i) {return !(patientsObjs[dd].firstDate<=d&&patientsObjs[dd].deathDate>=d)}).attr("display","none");
    //main.selectAll(".point").filter(function(dd,i){return !(dd.los>=d&&dd.prevLOS<d)}).style('fill-opacity','0.0');
}
function filterbyLOSCancel(d) {
    main.selectAll(".point").filter(function(dd,i){return (dd.los>=d&&dd.prevLOS<d)}).attr("display","none");
    setTimeout(function () {
        mouseoverPatientCount--;
        if(mouseoverPatientCount==0) {
            //console.log('called');

            d3.select("#textInfo1").text("");
            main.selectAll(".point").style('fill-opacity', '0.5').style('stroke-opacity','0.5').attr("display","");
            main.selectAll(".line").style('stroke-opacity','0.5').attr("display","");
        }
    },10);
}

function drawLine() {
    main.selectAll(".line").data(patients).enter()
        .append('path').attr('class','line')
        .attr('d',function(d){return line(patientsObjs[d].path)})
        .attr('fill','none')
        .attr('stroke',function(d){return getColorofPatient(d)})
        .attr('stroke-width',2)
        .style('stroke-opacity','0.5');
}

function drawCluster() {
    for(var i=0;i<cluster.length;i++){
        cluster[i].dataDistance=[];
    }
    for(var i=0;i<clu_info.length;i++) {
        var d = clu_info[i];
        var cx=xScale(cluster[d.cluster].centerX);
        var cy=yScale(cluster[d.cluster].centerY);
        var dx=xScale(d.posX);
        var dy=yScale(d.posY);
        cluster[d.cluster].dataDistance.push(Math.sqrt((cx-dx)*(cx-dx)+(cy-dy)*(cy-dy)));


    }

    for(var i=0;i<cluster.length;i++){
        cluster[i].dataDistance.sort(function sortNumber(a,b)
            {
                return a - b
            }
        );
    }
    cluster.sort(function sortby(a,b){
        return(b.dataDistance.length-a.dataDistance.length);
    });
    console.log(cluster);
    main.selectAll(".pointCluster").data(cluster).enter()

        .append('circle').attr("class","pointCluster")
        //.filter(function (dd,i){return i<=10})
        .attr('cx',function (d) {
            return xScale(d.centerX)
        })
        .attr('cy',function (d) {
            return yScale(d.centerY)
        })
        .attr('r',function (d) {
            return d.dataDistance[d.dataDistance.length-1]+3
        })
        .style('fill',function (d){
            return getColorbyDeathRisk(d.death_risk);
        })
        .style('fill-opacity',0.05)
        .style('stroke',d3.rgb(0,0,0))
        .style('stroke-opacity',0.05);
}

$("#noteModal").modal("show");

var playLOSIndex=-1;
var playInterval;
$("#btnPlay").click(function () {
    if(playLOSIndex==-1){
        playLOSIndex=0;
        var d=los[playLOSIndex];
        d3.select("#textInfo1").text("LOS："+(--d));
        filterbyLOS(d);
        playInterval=setInterval(function () {
            d=los[playLOSIndex];
            d3.select("#textInfo1").text("");
            filterbyLOSCancel(d);
            playLOSIndex=playLOSIndex+1;
            playLOSIndex=playLOSIndex%los.length;
            d=los[playLOSIndex];
            d3.select("#textInfo1").text("LOS："+(-d));
            filterbyLOS(d);
        },25)
    }else {
        clearInterval(playInterval);
        var d=los[playLOSIndex];
        d3.select("#textInfo1").text("");
        filterbyLOSCancel(d);
        playLOSIndex=-1;
    }
})