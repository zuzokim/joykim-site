import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const TestSupabase = () => {
  const [status, setStatus] = useState('로딩 중...');

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

  return <div>{status}</div>;
};

export default TestSupabase;



