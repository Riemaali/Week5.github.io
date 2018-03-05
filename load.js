// Note that:The column for the different Boroughs of New-York City is in the column BORO_NM//

var rawdataset; //Declare global var
var rowConverterNYC = function(d) { return {
    Boroughs: d.BORO_NM, //No conversion
    CrimeType: d.PD_DESC // no conversion
  };
}

d3.csv("data/NYPD_Complaint_Data_Historic.csv", rowConverterNYC, function(data) { 
  //Hand CSV data off to global var, //so it's accessible later. 
  dataset = data;
int Manhattan = Collections.frequency(dataset.BORO_NM, "Manhattan");

int Bronx = Collections.frequency(dataset.BORO_NM, "Bronx");
int Queens = Collections.frequency(dataset.BORO_NM, "Queens"); 
int Brooklyn = Collections.frequency(dataset.BORO_NM, "Brooklyn");

});
