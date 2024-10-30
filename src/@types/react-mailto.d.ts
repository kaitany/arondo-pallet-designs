declare module 'react-mailto' {
    interface MailtoProps {
      email: string;
      subject?: string;
      body?: string;
      children: React.ReactNode;
    }
  
    const Mailto: React.FC<MailtoProps>;
    export default Mailto;
  }
  
  