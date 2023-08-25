document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("timecard-form");
    const clockInButton = document.getElementById("clock-in-button");
    const messageDiv = document.getElementById("message");

    clockInButton.addEventListener("click", function() {
        const employeeId = document.getElementById("employee-id").value;
        const employeeName = document.getElementById("employee-name").value;

        // データを送信する処理を追加
        sendDataToGoogleSheets(employeeId, employeeName);

        // メッセージを表示し、入力欄を空にする
        window.alert("データを正常に送信しました");
        document.getElementById("employee-id").value = "";
        document.getElementById("employee-name").value = "";
    });
});

function sendDataToGoogleSheets(employeeId, employeeName) {
    // Google Sheets APIを使用してデータを送信するコードをここに追加
}
