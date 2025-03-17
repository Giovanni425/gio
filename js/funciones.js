    /*function calcularPresupuesto(){
        let altura = document.getElementById("altura").value;
        let valor_altura = altura;

        let ancho = document.getElementById("ancho").value;
        let valor_ancho = ancho;

        let presupuesto = valor_altura * valor_ancho;
        document.getElementById("total").innerText = presupuesto;
    }*/

    function presupuesto(){
        let jambam = 98;
        let jambasin = 81;
        let rielsencillo = 48;
        let AdapMosquitero = 27;
        let ZocloP = 89;
        let ZocloC = 35;
        let CercoChapa = 43;
        let CercoT = 54;
        let MosquiteroV = 49;
        let MosquiteroH = 54;
        let JaladeraE = 25;
        let JaladeraP = 20;
        let CaNapoleon =20;
        let CaMosquitero = 15;
        let CaFleje = 15;
        let TelaM = 70;
        let vinil = 140;
        let tornilleria = 40;
        let silicones = 70;
        let cristal = 360;

        let mano_obra = parseFloat(document.getElementById("manodeobra").value) || 0;


        let ml1 = parseInt(document.getElementById("jm").value)||0;
        
        let ml2 = parseInt(document.getElementById("jsm").value)||0;
        
        let ml3 = parseInt(document.getElementById("rs").value)||0;
        
        let ml4 = parseInt(document.getElementById("am").value)||0;
        
        let ml5 = parseInt(document.getElementById("zp").value)||0;
    
        let ml6 = parseInt(document.getElementById("zc").value)||0;
    
        let ml7 = parseInt(document.getElementById("cerco_chapa").value)||0;

        let ml8 = parseInt(document.getElementById("ct").value)||0;

        let ml9 = parseInt(document.getElementById("mv").value)||0;

        let ml10 = parseInt(document.getElementById("mh").value)||0;

        let ml11 = parseInt(document.getElementById("je").value)||0;

        let ml12 = parseInt(document.getElementById("jp").value)||0;
    
        let ml13 = parseInt(document.getElementById("napoleon").value)||0;

        let ml14 = parseInt(document.getElementById("cm").value)||0;
    
        let ml15 = parseInt(document.getElementById("cf").value)||0;

        let ml16 = parseInt(document.getElementById("tm").value)||0;

        let ml17 = parseInt(document.getElementById("vinil").value)||0;

        let ml18 = parseInt(document.getElementById("tornilleria").value)||0;

        let ml19 = parseInt(document.getElementById("silicones").value)||0;

        let ml20 = parseInt(document.getElementById("cristal").value)||0;

        let c1 = jambam * ml1;
        let c2 = jambasin * ml2;
        let c3 = rielsencillo * ml3;
        let c4 = AdapMosquitero * ml4;
        let c5 = ZocloP * ml5;
        let c6 = ZocloC * ml6;
        let c7 = CercoChapa * ml7;
        let c8 = CercoT * ml8 ;
        let c9 = MosquiteroV * ml9;
        let c10 = MosquiteroH * ml10;
        let c11 = JaladeraE * ml11;
        let c12 = JaladeraP *ml12 ;
        let c13 = CaNapoleon * ml13;
        let c14 = CaMosquitero * ml14;
        let c15 = CaFleje * ml15;
        let c16 = TelaM * ml16;
        let c17 = vinil * ml17;
        let c18 = tornilleria * ml18;
        let c19 = silicones * ml19;
        let c20 = cristal * ml20;

        let subtotal = c1 + c2 + c3 + c4 + c5 + c6 + c7 +c8 + c9 + c10 + c11 + c12 + c13 + c14 + c15 + c16 + c17 + c18 + c19 + c20;
        let iva = Math.floor(subtotal * 0.16);
        let total = subtotal + iva + mano_obra;


        document.getElementById("total1").innerText = "$" + c1;
        document.getElementById("total2").innerText = "$" + c2;
        document.getElementById("total3").innerText = "$" + c3;
        document.getElementById("total4").innerText = "$" + c4;
        document.getElementById("total5").innerText = "$" + c5;
        document.getElementById("total6").innerText = "$" + c6;
        document.getElementById("total7").innerText = "$" + c7;
        document.getElementById("total8").innerText = "$" + c8;
        document.getElementById("total9").innerText = "$" + c9;
        document.getElementById("total10").innerText = "$" + c10;
        document.getElementById("total11").innerText = "$" + c11;
        document.getElementById("total12").innerText = "$" + c12;
        document.getElementById("total13").innerText = "$" + c13;
        document.getElementById("total14").innerText = "$" + c14;
        document.getElementById("total15").innerText = "$" + c15;
        document.getElementById("total16").innerText = "$" + c16;
        document.getElementById("total17").innerText = "$" + c17;
        document.getElementById("total18").innerText = "$" + c18;
        document.getElementById("total19").innerText = "$" + c19;
        document.getElementById("total20").innerText = "$" + c20;

        document.getElementById("finalsub").innerText = "$" + subtotal;
        document.getElementById("ivasub").innerText = "$" + iva;
        document.getElementById("totalfinal_tabla").innerText = total;
        

        let celda = document.getElementById("TOTAL");
        if (celda && celda.textContent.trim() !== "") {
        celda.setAttribute("id","texto-detectado")
        }
    }


