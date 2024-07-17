




function calculateValue(){
    
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let bmi = (weight / (height * height));
      if(!isNaN(bmi)) {
    document.getElementById ('result').value = `Your BMI is : ${bmi}`;
    } else {

        document.getElementById ('result').value = `Please Fill above Details`;
    }

};

function FeetToMeters() {
    let feet = eval(document.getElementById('Foot').value);
    let meters = eval((feet * 0.3048).toFixed(2));

    console.log(meters);
    if(!isNaN(meters)) {
        document.getElementById ('resultMeter').value = `Meter : ${meters} meters`;

        } else {
    
            document.getElementById ('resultMeter').value = `please Fill above Details`;
        };
};


    