function checkSetup() {
    const powerLed = document.getElementById('powerLed').value;
    const internetLed = document.getElementById('internetLed').value;
    const wifiLed = document.getElementById('wifiLed').value;
    let resultMessage = '';

    // Check Power LED
    if (powerLed === 'yes') {
        resultMessage += 'Power LED is ON. ';
        
        // Check Internet LED
        if (internetLed === 'yes') {
            resultMessage += 'Internet LED is ON. ';
            
            // Check WiFi LEDs
            if (wifiLed === 'yes') {
                resultMessage += '2.4 and 5 GHz LEDs are ON. You can proceed with the Nighthawk App setup.';
            } else {
                resultMessage += '2.4 and 5 GHz LEDs are OFF. Please check if the WiFi On/Off button has been pressed.';
            }
        } else {
            resultMessage += 'Internet LED is OFF. Please unplug both the modem and the router, wait 30 seconds, then plug them back in.';
        }
    } else {
        resultMessage = 'Power LED is OFF. Please check your router’s power supply.';
    }

    // Display result message
    document.getElementById('result').innerText = resultMessage;
}