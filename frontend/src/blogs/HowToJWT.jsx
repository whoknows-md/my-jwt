import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CodeIcon from '@mui/icons-material/Code';

const HowToJWT = () => {
  // For a real application, SEO meta tags like <title>, <meta description>, and <meta keywords>
  // would typically be managed by a library like react-helmet-async in a client-side React app,
  // or by a server-side rendering (SSR) framework.
  // Example of what would go in the <head> tag of your HTML document:
  // <title>How to JWT: A Comprehensive Guide to JSON Web Tokens for Secure Authentication</title>
  // <meta name="description" content="Learn everything about JWT (JSON Web Tokens) for secure, stateless authentication in web applications and APIs. Understand structure, benefits, and how to implement JWT for web security." />
  // <meta name="keywords" content="JWT, JSON Web Token, authentication, authorization, web security, API security, token-based authentication, stateless, security, how to JWT, implement JWT, secure API, web token" />

  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-8">
      <Container maxWidth="lg" className="px-4">
        {/* Main Title and Description */}
        <Box className="text-center mb-12 py-8 rounded-lg shadow-xl bg-white bg-opacity-90 backdrop-blur-sm">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight"
          >
            How to <span className="text-indigo-600">JWT</span>: A Comprehensive Guide to JSON Web Tokens
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Unlock secure, stateless authentication for your web applications and APIs with JSON Web Tokens.
            Learn the fundamentals, structure, and implementation of <span className="font-semibold text-indigo-700">JWT</span>.
          </Typography>
        </Box>

        {/* What is JWT Section */}
        <Card className="mb-10 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <Typography variant="h3" component="h2" className="text-3xl font-bold text-gray-800 mb-5 flex items-center">
              <VpnKeyIcon className="mr-3 text-indigo-500 text-4xl" /> What is JWT (JSON Web Token)?
            </Typography>
            <Typography paragraph className="text-gray-700 leading-relaxed text-lg mb-4">
              A <span className="font-semibold text-indigo-600">JSON Web Token (JWT)</span> is a compact, URL-safe means of representing
              claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object
              that is digitally signed using a JSON Web Signature (JWS) or encrypted using a JSON Web Encryption (JWE).
            </Typography>
            <Typography paragraph className="text-gray-700 leading-relaxed text-lg">
              Primarily used for <span className="font-semibold text-indigo-600">authentication</span> and <span className="font-semibold text-indigo-600">authorization</span>,
              JWTs allow a server to verify the identity of a user and securely transmit information between parties.
              They are an excellent solution for stateless authentication in modern web applications and APIs, enhancing <span className="font-semibold">web security</span>.
            </Typography>
          </CardContent>
        </Card>

        {/* Structure of a JWT Section */}
        <Card className="mb-10 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <Typography variant="h3" component="h2" className="text-3xl font-bold text-gray-800 mb-5 flex items-center">
              <CodeIcon className="mr-3 text-indigo-500 text-4xl" /> The Structure of a JSON Web Token
            </Typography>
            <Typography paragraph className="text-gray-700 leading-relaxed text-lg">
              A typical <span className="font-semibold text-indigo-600">JWT</span> consists of three parts, separated by dots (`.`):
            </Typography>
            <List className="list-disc pl-5 space-y-3">
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Header</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                      Contains the token type (JWT) and the signing algorithm (e.g., HS256, RS256).
                      It's a Base64Url-encoded JSON object. Example: <code className="bg-gray-100 p-1 rounded text-sm">{'{"alg": "HS256", "typ": "JWT"}'}</code>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Payload</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                      Contains the claims (statements about an entity, usually the user, and additional data).
                      Claims can be registered (e.g., `iss`, `exp`, `sub`), public, or private.
                      This is also Base64Url-encoded. Example: <code className="bg-gray-100 p-1 rounded text-sm">{`{"sub": "1234567890", "name": "John Doe", "iat": 1516239022}`}</code>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Signature</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                      Created by taking the Base64Url-encoded header, the Base64Url-encoded payload,
                      a secret, and signing it with the algorithm specified in the header.
                      This ensures the <span className="font-semibold">integrity</span> and <span className="font-semibold">authenticity</span> of the <span className="font-semibold text-indigo-600">JWT</span>.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Typography paragraph className="text-gray-700 leading-relaxed text-lg mt-4">
              The resulting <span className="font-semibold text-indigo-600">JWT</span> looks like: <code className="bg-gray-100 p-1 rounded text-sm break-all">BASE64URL_HEADER.BASE64URL_PAYLOAD.BASE64URL_SIGNATURE</code>
            </Typography>
          </CardContent>
        </Card>

        {/* How JWT Works Section */}
        <Card className="mb-10 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <Typography variant="h3" component="h2" className="text-3xl font-bold text-gray-800 mb-5 flex items-center">
              <SecurityIcon className="mr-3 text-indigo-500 text-4xl" /> How JWT Works: Authentication Flow
            </Typography>
            <List className="list-decimal pl-5 space-y-3">
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">User Login</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    The user logs in with their credentials (username and password) to the <span className="font-semibold">authentication</span> server.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Token Issuance</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    Upon successful <span className="font-semibold">authentication</span>, the server generates a <span className="font-semibold">JWT</span> (JSON Web Token) and sends it back to the client.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Client Stores Token</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    The client (e.g., browser) typically stores the <span className="font-semibold">JWT</span> in local storage or cookies for subsequent requests.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Access Protected Routes</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    For subsequent requests to protected resources or <span className="font-semibold">API endpoints</span>, the client sends the <span className="font-semibold">JWT</span>,
                    usually in the <code className="bg-gray-100 p-1 rounded text-sm">Authorization</code> header as a <code className="bg-gray-100 p-1 rounded text-sm">Bearer Token</code>.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-blue-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Server Verification</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    The resource server verifies the <span className="font-semibold">JWT</span>'s signature using the known secret key. If valid, it extracts the claims (e.g., user ID, roles) and grants access to the requested resource, implementing <span className="font-semibold">authorization</span>.
                  </Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Benefits of JWT Section */}
        <Card className="mb-10 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <Typography variant="h3" component="h2" className="text-3xl font-bold text-gray-800 mb-5 flex items-center">
              <CheckCircleOutlineIcon className="mr-3 text-indigo-500 text-4xl" /> Key Benefits of Using JWTs for Web Security
            </Typography>
            <List className="list-disc pl-5 space-y-3">
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Statelessness</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    The server doesn't need to store session information. The <span className="font-semibold">JWT</span>
                    contains all necessary data for <span className="font-semibold">authentication</span>, simplifying server architecture and enabling better <span className="font-semibold">scalability</span>.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Scalability</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    Easier to scale horizontally across multiple servers and microservices since no shared session state or database lookups are required for each request.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Security</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    Digitally signed <span className="font-semibold">JWTs</span> ensure authenticity and integrity of the data, making them resistant to tampering. They are also suitable for <span className="font-semibold">cross-origin authentication</span>.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-green-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Compact and Self-Contained</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    JWTs are smaller than other authentication tokens, leading to faster transmission over networks, and contain all the necessary information about the user.
                  </Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* When to Use JWT Section */}
        <Card className="mb-10 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <Typography variant="h3" component="h2" className="text-3xl font-bold text-gray-800 mb-5 flex items-center">
              <CodeIcon className="mr-3 text-indigo-500 text-4xl" /> When to Use <span className="text-indigo-600">JWT</span> for Your Applications
            </Typography>
            <List className="list-disc pl-5 space-y-3">
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-teal-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Authorization</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    The most common scenario: after a user logs in, each subsequent request will include the <span className="font-semibold">JWT</span>,
                    allowing the user to access routes, services, and resources that are permitted with that token (Role-Based Access Control).
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-teal-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Information Exchange</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-semibold">JWTs</span> are a good way to securely transmit information between parties, such as microservices, as the signature verifies the sender's authenticity and ensures the message hasn't been tampered with.
                  </Typography>}
                />
              </ListItem>
              <ListItem disablePadding className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 mt-1">
                  <CheckCircleOutlineIcon className="text-teal-500" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography component="span" className="font-bold text-xl text-gray-800">Single Sign-On (SSO)</Typography>}
                  secondary={<Typography component="span" className="text-gray-700 leading-relaxed text-lg">
                    JWTs are widely used for SSO solutions because of their small overhead, stateless nature, and ability to work across different domains, providing a seamless user experience.
                  </Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Box className="text-center mt-12 py-10 rounded-xl bg-indigo-700 shadow-xl">
          <Typography
            variant="h4"
            component="p"
            className="text-white text-3xl font-bold mb-4"
          >
            Ready to Implement JWT?
          </Typography>
          <Typography
            paragraph
            className="text-indigo-200 text-xl max-w-2xl mx-auto mb-6"
          >
            Dive deeper into the world of secure authentication and authorization with JSON Web Tokens and start building robust, scalable applications today.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://jwt.io/introduction" // Example external link to official JWT site
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Explore JWT.io for More Information
          </Button>
        </Box>
      </Container>
    </main>
  );
};

export default HowToJWT;
