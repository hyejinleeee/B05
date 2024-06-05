import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import UserProfilePage from '../pages/UserProfilePage';
import CreateNewPostPage from '../pages/CreateNewPostPage';
import LogInPage from '../pages/LogInPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostUpdate from '../pages/PostUpdate';
import RegisterPage from '../pages/RegisterPage';
import DefaultLayout from '../layout/DefaultLayout';

const router = createBrowserRouter([
  {
    element: <DefaultLayout></DefaultLayout>,
    children: [
      { path: '/', element: <MainPage></MainPage> },
      {
        path: '/logIn',
        element: <LogInPage></LogInPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/myPage/:user_id',
        element: <UserProfilePage></UserProfilePage>
      },
      {
        path: '/createNewPost',
        element: <CreateNewPostPage></CreateNewPostPage>
      },
      {
        path: '/post/:post_id',
        element: <PostDetailPage></PostDetailPage>
      },
      {
        path: '/PostUpdate/:id',
        element: <PostUpdate></PostUpdate>
      }
    ]
  }
]);

export default router;
