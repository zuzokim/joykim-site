import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const TestSupabase = () => {
  const [status, setStatus] = useState<string>('로딩 중...');

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('test').select('*').limit(1);
        if (error) {
          setStatus('연동 실패: ' + error.message);
        } else {
          setStatus('연동 성공!');
        }
      } catch (e: any) {
        setStatus('연동 실패: ' + e.message);
      }
    }
    testConnection();
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50">
      <div className="w-[140px] p-6 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center">
        {status.startsWith('연동 성공') ? (
          <svg width="100" height="100" className="text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg width="100" height="100" className="text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <div className="text-2xl font-semibold text-black mb-2">Supabase 테스트</div>
        <p className={status.startsWith('연동 성공') ? "text-green-600" : "text-red-600"}>{status}</p>
      </div>
    </div>
  );
};

export default TestSupabase;



