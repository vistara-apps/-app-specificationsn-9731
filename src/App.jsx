import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DeliveryList from './components/DeliveryList';
import DeliveryDetails from './components/DeliveryDetails';
import ErrorBoundary from './components/ErrorBoundary';
import Toast from './components/Toast';
import SkeletonLoader from './components/SkeletonLoader';
import { mockDeliveries } from './data/mockData';

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Simulate initial data loading
  useEffect(() => {
    const loadData = setTimeout(() => {
      setDeliveries(mockDeliveries);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadData);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLoading && deliveries.length > 0) {
      const interval = setInterval(() => {
        setDeliveries(prev => prev.map(delivery => {
          if (delivery.status === 'in-transit' && Math.random() > 0.7) {
            const newProgress = Math.min(delivery.progress + 10, 90);
            if (newProgress !== delivery.progress) {
              showToast('Package location updated', 'info');
            }
            return {
              ...delivery,
              progress: newProgress
            };
          }
          return delivery;
        }));
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [isLoading, deliveries.length]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
  };

  const handleSelectDelivery = (delivery) => {
    setSelectedDelivery(delivery);
    showToast(`Viewing tracking details for ${delivery.trackingNumber}`, 'info');
  };

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch = delivery.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         delivery.recipient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || delivery.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        
        <main className="container mx-auto px-4 py-6 sm:py-8">
          {isLoading ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <SkeletonLoader type="list" />
              </div>
              <div className="lg:col-span-2">
                <SkeletonLoader type="card" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 animate-fade-in">
                <DeliveryList 
                  deliveries={filteredDeliveries}
                  selectedDelivery={selectedDelivery}
                  onSelectDelivery={handleSelectDelivery}
                />
              </div>
              
              <div className="lg:col-span-2 animate-fade-in">
                {selectedDelivery ? (
                  <DeliveryDetails 
                    delivery={selectedDelivery} 
                    onShowToast={showToast}
                  />
                ) : (
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 sm:p-12 text-center backdrop-blur-sm bg-white/80">
                    <div className="max-w-md mx-auto">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Select a Delivery</h3>
                      <p className="text-sm sm:text-base text-gray-600">Choose a delivery from the list to view detailed tracking information</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>

        {toast && (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;