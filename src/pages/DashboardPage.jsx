import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import Settings from '../components/settings/Settings';

function DashboardPage() {
  const [selectedItem, setSelectedItem] = useState('Overview');

  const renderContent = () => {
    switch (selectedItem) {
      case 'Settings':
        return <Settings />;
      case 'Overview':
        return (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Welcome to FastGraduate
            </h2>
            <p className="text-gray-600">
              Select an option from the menu to get started with managing your academic performance.
            </p>
          </div>
        );
      case 'Semesters':
        return (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Semester Management
            </h2>
            <p className="text-gray-600">
              Manage your semesters and courses here.
            </p>
          </div>
        );
      case 'Analysis':
        return (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Performance Analysis
            </h2>
            <p className="text-gray-600">
              View detailed analysis of your academic performance.
            </p>
          </div>
        );
      case 'Print Summary':
        return (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Print Summary
            </h2>
            <p className="text-gray-600">
              Generate and print your academic summary.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar selectedItem={selectedItem} onSelectItem={setSelectedItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar selectedItem={selectedItem} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          <div className="container mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;