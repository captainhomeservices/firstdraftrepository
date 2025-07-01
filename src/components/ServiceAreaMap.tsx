import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreaMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving the Austin area and Highland Lakes region within 10 miles of the 360 Bridge
          </p>
        </div>

        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Map Container */}
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55515.89!2d-97.8!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd7cb59a!2sPennybacker%20Bridge!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Service Area Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Central point (360 Bridge) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Service radius circle */}
                  <div className="w-64 h-64 rounded-full bg-teal-500/20 border-2 border-teal-500/40 animate-pulse"></div>
                  
                  {/* Center marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-red-600 rounded-full p-2 shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Legend */}
          <div className="p-6 bg-white border-t">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">360 Bridge (Pennybacker Bridge)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-teal-500/40 rounded-full border border-teal-500"></div>
                <span className="text-sm font-medium text-gray-700">10-Mile Service Radius</span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <strong>Lakes Served:</strong> Lake Austin, Lake Travis, Lake LBJ, Inks Lake, Lake Marble Falls, Lake Buchanan, Lady Bird Lake
              </p>
            </div>
          </div>
        </div>

        {/* Service Area Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Central Austin</h3>
            <p className="text-gray-600">Lake Austin, Lady Bird Lake, and surrounding waterfront properties</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">West Austin</h3>
            <p className="text-gray-600">Lake Travis and western Highland Lakes communities</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Highland Lakes</h3>
            <p className="text-gray-600">Lake LBJ, Inks Lake, Lake Marble Falls, and Lake Buchanan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;