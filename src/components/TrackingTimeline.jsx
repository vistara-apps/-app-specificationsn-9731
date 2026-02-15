import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

function TrackingTimeline({ timeline }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />;
      case 'current':
        return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 animate-pulse" />;
      default:
        return <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Tracking Timeline</h3>
      
      <div className="space-y-6 sm:space-y-8">
        {timeline.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                {getStatusIcon(event.status)}
              </div>
              {index < timeline.length - 1 && (
                <div className={`w-0.5 h-full mt-2 ${
                  event.status === 'completed' ? 'bg-green-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
            
            <div className="flex-1 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className={`font-semibold text-sm sm:text-base ${
                  event.status === 'completed' ? 'text-gray-900' : 
                  event.status === 'current' ? 'text-primary-600' : 'text-gray-400'
                }`}>
                  {event.title}
                </h4>
                <span className={`text-xs sm:text-sm ${
                  event.status === 'completed' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {event.time}
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${
                event.status === 'completed' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {event.description}
              </p>
              {event.location && (
                <p className={`text-xs mt-1 ${
                  event.status === 'completed' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  📍 {event.location}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackingTimeline;