
import { FiClipboard, FiCheckSquare, FiSquare, FiLoader } from 'react-icons/fi';

export function Sidebar() {
    return (
      <div className="w-64 h-screen p-6 bg-white-600 text-black">
        <div className="mb-6">
          <p className="font-bold mb-2">Tasks</p>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
                <FiClipboard />
                <span>All tasks</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
                <FiSquare />
                <span>To do</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
                <FiLoader />
                <span>In progress</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200">
                <FiCheckSquare />
                <span>Done</span>
              </a>
            </li>
          </ul>
        </div>
  
        <div>
          <a href="#" className="hover:text-purple-300 mb-4 block">Reminders</a>
          <a href="#" className="hover:text-purple-300 block">
            
            <span>Settings</span>
          </a>
        </div>
      </div>
    );
  }