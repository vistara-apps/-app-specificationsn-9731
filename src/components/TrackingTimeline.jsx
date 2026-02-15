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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 backdrop-blur-sm bg-white/95">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Tracking Timeline</h3>
      
      <div className="space-y-6 sm:space-y-8">
        {timeline.map((event, index) => (
          <div 
            key={index} 
            className="flex gap-4 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative">
                {getStatusIcon(event.status)}
                {event.status === 'current' && (
                  <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></div>
                )}
              </div>
              {index < timeline.length - 1 && (
                <div className={`w-0.5 h-full mt-2 ${
                  event.status === 'completed' 
                    ? 'bg-gradient-to-b from-success-600 to-success-400' 
                    : 'bg-gray-300'
                }`} />
              )}
            </div>
            
            <div className={`flex-1 pb-8 ${
              event.status === 'current' 
                ? 'p-4 -ml-3 rounded-lg bg-gradient-to-r from-primary-50 to-transparent border-l-4 border-l-primary-600' 
                : ''
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className={`font-bold text-sm sm:text-base ${
                  event.status === 'completed' ? 'text-gray-900' : 
                  event.status === 'current' ? 'text-primary-600' : 'text-gray-400'
                }`}>
                  {event.title}
                </h4>
                {event.time && (
                  <span className={`text-xs sm:text-sm font-medium px-2 py-1 rounded ${
                    event.status === 'completed' 
                      ? 'text-gray-600 bg-gray-100' 
                      : event.status === 'current'
                      ? 'text-primary-600 bg-primary-100'
                      : 'text-gray-400'
                  }`}>
                    {event.time}
                  </span>
                )}
              </div>
              <p className={`text-xs sm:text-sm font-medium ${
                event.status === 'completed' ? 'text-gray-600' : 
                event.status === 'current' ? 'text-gray-700' : 'text-gray-400'
              }`}>
                {event.description}
              </p>
              {event.location && (
                <div className={`text-xs mt-2 flex items-center gap-1 ${
                  event.status === 'completed' ? 'text-gray-500' : 
                  event.status === 'current' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  <span>📍</span>
                  <span className="font-medium">{event.location}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackingTimeline;