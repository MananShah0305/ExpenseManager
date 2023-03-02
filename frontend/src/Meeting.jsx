import React from 'react'
import { ZoomMtg } from '@zoomus/websdk'

const meeting_state = {
    signature: "",
    passCode: "",
    meetingNumber: "",
    apiKey: "UOAxOR1vRPmQbdbnvM8QMg",// enter API Key
    apiSecret: "Cx7x0gySdqZJHBmIgfET2qAqtlSUZwFt7pFV", // enter API Secret
    userName: "Manan",
    userEmail: "mndp0305@gmail.com",
    role: "1", // 1 for host and 0 for participants.
};

function Meeting() {

    const generateSignature = (event) => {
        return new Promise((resolve, reject) => {
            try {
                const signature = ZoomMtg.generateSignature({
                    meetingNumber: meeting_state.meetingNumber,
                    apiKey: meeting_state.apiKey,
                    apiSecret: meeting_state.apiSecret,
                    role: meeting_state.role,
                });
                resolve(signature);
            } catch (e) {
                reject(Error("generate signature rejected"));
            }
        });
    };

    const initializeWebSDK = () => {
        ZoomMtg.init({
            leaveUrl: "http://localhost:3000/",
            isSupportAV: true,
            success: (success) => {
                ZoomMtg.join({
                    signature: meeting_state.signature,
                    passWord: meeting_state.passCode,
                    meetingNumber: meeting_state.meetingNumber,
                    apiKey: meeting_state.apiKey,
                    userName: meeting_state.userName,
                    userEmail: meeting_state.userEmail,

                    success: (success) => {
                        console.log(success);
                    },
                    error: (error) => {
                        console.log(error);
                    },
                });
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    const handleJoinButton = (event) => {
        generateSignature().then(
            (result) => {
                // set signature value
                this.setState({
                    signature: result,
                });
                // initialize zoom web SDK
                ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.9/lib", "/av");
                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();

                initializeWebSDK();

                // display zoom container
                document.getElementById("zmmtg-root").style.display = "block";
            },
            (error) => {
                console.log("error");
            }
        );
    };

    const handleMeetingNumberChange = (e) => {
        meeting_state.meetingNumber = e.target.value
    }
    const handlePasscodeChange = (e) => {
        meeting_state.passCode = e.target.value
    }

    return (
        <div className="App">
            <h2 className="meeting-header">Join Meeting</h2>
            <div className="meeting-container">
                <div>
                    <label for="meetingid">Meeting Number</label>
                    <input
                        type="text"
                        id="meetingid"
                        placeholder="Meeting Number"
                        value={meeting_state.meetingNumber}
                        onChange={handleMeetingNumberChange} />
                </div>
                <div>
                    <label for="passcode">Passcode</label>
                    <input
                        type="text"
                        placeholder="Passcode"
                        value={meeting_state.passCode}
                        onChange={handlePasscodeChange} />
                </div>
            </div>
            <div className="action-continer">
                <button
                    className="join-meeting-button"
                    onClick={handleJoinButton}
                >
                    Join Meeting
                </button>
            </div>
        </div>
    );

}

export default Meeting

