function printReceipt() {
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const txnId = document.getElementById('txnId').value;
    const amount = document.getElementById('amount').value;
    const balance = document.getElementById('balance').value;
    const sum1 = document.getElementById('sum1').value; // Using balance as placeholder
    const sum2 = document.getElementById('sum2').value; // Using balance as placeholder

    // Generate a random color for the "O" icon
    const colors = ['#e6007e', '#0077cc', '#009688', '#ff9800', '#673ab7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const starColor = '#e6007e';
    const primaryTextColor = '#e6007e';

    const newWindow = window.open('', '', 'width=400,height=750');
    newWindow.document.write(`
        <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
            <title>Receipt</title>
            <style>
                body {
                    margin: 0;
                    font-family: 'Arial', sans-serif;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                }
                .container {
                    text-align: center;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    width: 90%;
                    max-width: 360px;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                .header-text {
                    text-align: left;
                    flex-grow: 1;
                    font-size: 30px:
                }
                .highlight1 { color: ${primaryTextColor}; }
                .highlight { color: ${primaryTextColor}; font-weight: bold; }
                .green { color: green; font-weight: bold; }

                .tick-circle {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: #fff;
                    color: green;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 18px;
                    border: 2px solid green;
                    box-sizing: border-box;
                }

                .tick-circle i{

                    color: green;
                }


                .phone-section {
                    display: flex;
                    align-items: center;
                    margin: 15px 0;
                }

                .icon-container {
                    width: 40px;
                    height: 40px;
                    background-color:#89eeb0;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;
                    border-radius: 50%;
                    font-weight: bold;
                    font-size: 16px;
                    box-sizing: border-box;
                }

                .icon-container:before {

                    color: #fff;
                    -webkit-text-stroke: 2px #fff;
                    text-stroke: 2px #fff;
                }


                .phone-details {
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex-grow: 1;
                }

                .phone-line {
                    font-size: 15px;
                    margin-bottom: 2px;
                }
                .phone-line:first-child {
                    font-weight: bold;
                }

                .call-box {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 14px;
                    padding: 6px 10px;
                    border: 1px solid ${primaryTextColor};
                    border-radius: 8px;
                    color: ${primaryTextColor};
                    background-color: transparent;
                    height: fit-content;
                    margin-left: auto;
                }
                .call-box i {
                    color: ${primaryTextColor};
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-collapse: collapse;
                    margin-top: 15px;
                    border-radius: 6px;
                    overflow: hidden;
                }

                .info-box {
                    border: 1px solid #ddd;
                    font-size: 14px;
                    padding: 10px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }

                .label {
                    font-weight:100;

                    margin-bottom: 4px;
                }
                .bld{
                font-weight:bold;
                }

                .reference-box {
                    border: 1px solid ${primaryTextColor};
                    padding: 10px;
                    margin-top: 15px;
                    border-radius: 6px;
                    text-align: left;
                }

                .reference-title {
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .btn-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }

                .btn {
                    flex: 1;
                    padding: 10px;
                    background-color: #fff;
                    color: ${primaryTextColor};
                    border: 1px solid ${primaryTextColor};
                    border-radius: 8px;
                    font-size: 14px;
                    margin: 0 5px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                }
                .btn:hover{
                    background-color: ${primaryTextColor};
                    color: #fff;
                }

                .auto-pay-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    color: ${primaryTextColor};
                    font-size: 20px;
                }

                .auto-pay-icon i {
                    color: ${primaryTextColor};
                    font-size: 20px;

                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                }

                .auto-pay-icon span {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                     margin-right: 40px;
                    transform: translate(-50%, -50%);
                    font-size: 10px;
                    color: ${primaryTextColor};
                }


                .reward-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 20px;
                    margin-bottom: 15px;
                }

                .star-container {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background-color: ${starColor};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 5px;
                }

                .star-icon {
                    width: 24px;
                    height: 24px;
                    font-size: 16px;
                    color: white;
                }

                .reward-text {
                    font-size: 14px;
                    color: black;
                    margin-bottom: 2px;
                }

                .reward-subtext {
                    font-size: 16px;
                    color: black;
                    margin-bottom: 2px;
                }

                .go-home-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${primaryTextColor};
    color: white;
    padding: 15px 20px; /* Increased vertical padding for better visual */
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: calc(100% + 40px); /* Extend width by double the container padding */
    margin: 20px -20px 0 -20px; /* Negative margins to counteract the container padding */
    border: none;
    border-radius: 0 0 12px 12px; /* Apply border-radius to the bottom corners */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

                .arrow-icon {
                    font-size: 20px;
                    color: white;
                }

                .copy-icon img {
                    width: 20px; /* adjust size as you want */
                    height: 20px;
                    cursor: pointer; /* makes it look clickable */
                    margin-left: 8px; /* a little space from the txnId */
                    vertical-align: middle; /* aligns with text */                    
                    }


                .eye-icon i {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 400;
                    font-size: 14px;
                    margin-left: 5px;
                    transform: scaleX(-1);
                    color: ${primaryTextColor};
                }
                .call-icon {
                    width: 20px; /* set width */
                    height: 20px; /* set height */
                    margin-right: 8px; /* space between icon and text */
                    vertical-align: middle; /* align with text nicely */
                    }

            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <span class="header-text"><span class="highlight1">আপনার </span><span class="highlight">সেন্ড মানি</span> <span class="green">সফল হয়েছে</span></span>
                    <div class="tick-circle"><i class="fa-solid fa-check"></i></div>
                </div>

                <div class="phone-section">
                    <div class="icon-container">
                        O
                    </div>
                    <div class="phone-details">
                        <div class="phone-line">${phone}</div>
                        <div class="phone-line">${phone}</div>
                    </div>
                    <div class="call-box">
                        <img src="image/call.svg" alt="Call Icon" class="call-icon" />
                        কল
                        </div>

                </div>

                <div class="info-grid">
                    <div class="info-box">
                        <div class="label">সময়</div>
                        <div class="bld">${time}, ${date}</div>
                    </div>
                    <div class="info-box">
                    <div class="label">ট্রানজেকশন আইডি</div>
                    <div class="bld">
                        ${txnId} 
                        <span class="copy-icon">
                        <img src="image/copy.svg" alt="Copy" />
                        </span>
                    </div>
                    </div>

                    <div class="info-box">
                        <div class="label">সর্বমোট</div>
                        <div style="font-weight: bold;">৳${amount}</div>
                        <div>৳${sum1} + ৳${sum2}</div>
                    </div>
                    <div class="info-box">
                        <div class="label">নতুন ব্যালেন্স</div>
                        <div class="bld">৳${balance} <span class="eye-icon"><i class="fa-solid fa-eye-slash"></i></span></div>
                    </div>
                    <div class="info-box">
                        <div class="label">রেফারেন্স</div>
                        <div></div>
                    </div>
                    <div class="info-box" style="border-left: 1px solid #ddd;">
                        <div></div>
                    </div>
                </div>

                <div class="btn-group">
                    <button class="btn">
                        <span class="auto-pay-icon">
                            <img src="image/t.png" alt="Rotate Icon with Taka" style=" margin-left: 20px;">
                        </span>
                        অটো পে চালু করুন
                    </button>
                    <button class="btn"><img src="image/s.png" alt="arrow"> শেয়ার</button>
                </div>

                <div class="reward-section">
                    <div class="star-container">
                        <span class="star-icon">★</span>
                    </div>
                    <div class="reward-text">আপনি অর্জন করেছেন</div>
                    <div class="reward-subtext">বিকাশ রিওয়ার্ড পয়েন্ট</div>
                    <div style="font-size: 16px; color: black; margin-bottom: 2px;">চেক বিকাশ রিওয়ার্ডস টু ইউজ পয়েন্ট</div>
                </div>
                <button class="go-home-button">
                    হোম-এ ফিরে যান <img src="image/ar.svg" alt="bottom_arrow" style="margin-left: 20px; filter: invert(1);">

                </button>
            </div>

            <script>
                window.onload = function () {
                    setTimeout(() => window.print(), 500);
                };
            </script>
        </body>
        </html>
    `);
    newWindow.document.close();
}
