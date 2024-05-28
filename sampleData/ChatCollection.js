const users = [
  {
    username: 'john_doe',
    name: 'John Doe',
    profilePictureUrl:
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'james_miller',
    name: 'James Miller',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Supreme Leader is in the chat',
  },
  {
    username: 'jane_smith',
    name: 'Jane Smith',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    lastMessage: 'To kese hai app log?',
  },
  {
    username: 'alex_jones',
    name: 'Alex Jones',
    profilePictureUrl:
      'https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg',
    lastMessage: 'What is going on right now?',
  },
  {
    username: 'emily_brown',
    name: 'Emily Brown',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Are you coming or I should leave you behind',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'james_miller',
    name: 'James Miller',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Supreme Leader is in the chat',
  },
  {
    username: 'ava_wilson',
    name: 'Ava Wilson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You can leave now. But keep in mind that you have to complete all the pending task before tomorrow night',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'james_miller',
    name: 'James Miller',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Supreme Leader is in the chat',
  },
  {
    username: 'ava_wilson',
    name: 'Ava Wilson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You can leave now. But keep in mind that you have to complete all the pending task before tomorrow night',
  },
  {
    username: 'james_miller',
    name: 'James Miller',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Supreme Leader is in the chat',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
  {
    username: 'michael_smith',
    name: 'Michael Smith',
    profilePictureUrl:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Ok',
  },
  {
    username: 'sophia_johnson',
    name: 'Sophia Johnson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Waiting for your response',
  },
  {
    username: 'william_taylor',
    name: 'William Taylor',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Thankyou',
  },
  {
    username: 'olivia_anderson',
    name: 'Olivia Anderson',
    profilePictureUrl:
      'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage:
      'You are someone who is very important for me. Best wishes to you...',
  },
];

export default users;
