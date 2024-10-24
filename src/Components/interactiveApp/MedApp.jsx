import React, { useEffect, useState } from 'react';
import SectionPages from './SectionPages';
import { contents } from '../../utils/data';
import axios from 'axios'; // Import axios for API requests
import { localStorageKeys, SERVER_URL } from '../../utils/constants';

function MedApp(props) {
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    
    useEffect(() => {
        const handleCopy = (event) => {
            event.preventDefault();
            alert('Copying is disabled on this page.');
        };
        
        document.addEventListener('copy', handleCopy);
        
        const checkAccess = async () => {
            const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
            if (!token) {
                setErrorModalVisible(true);
                return;
            }

            try {
                const response = await axios.get(SERVER_URL+'users/check-guide-access', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.data) {
                    setErrorModalVisible(true);
                }
            } catch (error) {
                console.error('Error checking access:', error);
                setErrorModalVisible(true);
            }
        };

        checkAccess();

        return () => {
            document.removeEventListener('copy', handleCopy);
        };
    }, []);

    const handleCloseErrorModal = () => {
        setErrorModalVisible(false);
        window.location.href = '/'; 
    };

    return (
        <div>
            {contents.sections.map((item,index)=>{
                return (

                    <SectionPages sectionObj={item.section} key={index}/>
                )
            })}
            {errorModalVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                        <p className="text-gray-700 mb-4">You need access to view this content.</p>
                        <button
                            onClick={handleCloseErrorModal}
                            className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MedApp;
