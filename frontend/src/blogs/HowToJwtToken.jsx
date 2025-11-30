import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';

// A helper to update or create meta tags for basic SEO without external libraries
const updateMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export default function HowToJwtToken() {
  useEffect(() => {
    // Set SEO title and meta description dynamically
    document.title = "How to Use JWT Tokens: A Comprehensive Guide to JSON Web Token Authentication & Security";
    updateMetaTag("description", "Learn how to use JWT (JSON Web Token) for secure authentication. This guide covers JWT structure, benefits, security best practices, and implementation steps for robust API security.");
    updateMetaTag("keywords", "JWT token, JSON Web Token, authentication, authorization, security, API security, stateless authentication, how to use JWT, JWT tutorial, JWT guide, web security, token-based authentication");

    // Optional: Clean up title/meta on component unmount if this component is frequently mounted/unmounted
    // return () => {
    //   document.title = "Default Site Title"; // Restore original or default
    //   // You might also want to remove or reset meta tags
    // };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Container maxWidth="lg">
        <Box className="my-8 text-center">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 dark:text-blue-400 mb-4 tracking-tight"
            gutterBottom
          >
            How to Use JWT Tokens: Your Guide to Secure Authentication
          </Typography>
          <Typography
            variant="h2"
            component="p"
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Unlock the power of JSON Web Tokens (JWT) for robust and scalable authentication in your web applications and APIs.
          </Typography>
        </Box>

        {/* What is a JWT Token? */}
        <Card className="mb-8 p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              What is a JWT Token? (JSON Web Token)
            </Typography>
            <Typography paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A <strong>JSON Web Token (JWT)</strong> is an open standard (<Link href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="noopener" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-medium">RFC 7519</Link>) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs are commonly used for <strong>authentication</strong> and <strong>authorization</strong> in modern web applications, particularly in single-page applications (SPAs) and API-driven architectures.
            </Typography>
            <Typography paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Unlike traditional session-based authentication, JWTs enable <strong>stateless authentication</strong>, meaning the server does not need to store session information. This makes them highly scalable and efficient for distributed systems.
            </Typography>
          </CardContent>
        </Card>

        {/* Structure of a JWT */}
        <Card className="mb-8 p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              The Three Parts of a JWT
            </Typography>
            <Typography paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A JWT is essentially a long string of three parts, separated by dots, each Base64Url-encoded:
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm font-mono overflow-auto my-4 text-blue-600 dark:text-blue-300">
                <span className="text-red-500 dark:text-red-400">header</span>.<span className="text-purple-500 dark:text-purple-400">payload</span>.<span className="text-green-500 dark:text-green-400">signature</span>
              </pre>
            </Typography>

            <List className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ListItem className="flex flex-col items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
                <ListItemIcon className="min-w-0 mr-0 mb-2 text-blue-500 dark:text-blue-300">
                  <DescriptionIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h4" component="h3" className="text-xl font-semibold text-gray-900 dark:text-gray-100">1. Header</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 dark:text-gray-300">
                      Contains the type of token (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).
                      Example: <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">{`{"alg": "HS256", "typ": "JWT"}`}</code>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem className="flex flex-col items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
                <ListItemIcon className="min-w-0 mr-0 mb-2 text-purple-500 dark:text-purple-300">
                  <CodeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h4" component="h3" className="text-xl font-semibold text-gray-900 dark:text-gray-100">2. Payload</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 dark:text-gray-300">
                      Contains the "claims" about the entity (typically, the user) and additional data. Claims can be registered, public, or private.
                      Example: <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">{'{"sub": "1234567890", "name": "John Doe", "iat": 1516239022}'}</code>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem className="flex flex-col items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
                <ListItemIcon className="min-w-0 mr-0 mb-2 text-green-500 dark:text-green-300">
                  <SecurityIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h4" component="h3" className="text-xl font-semibold text-gray-900 dark:text-gray-100">3. Signature</Typography>}
                  secondary={
                    <Typography component="span" className="text-gray-700 dark:text-gray-300">
                      Created by taking the encoded header, the encoded payload, a secret key, and signing them with the algorithm specified in the header. This ensures the token's integrity.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* How JWT Authentication Works */}
        <Card className="mb-8 p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              How JWT Authentication Works
            </Typography>
            <List className="space-y-4">
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-blue-500 dark:text-blue-400">
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">1. User Login:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">The user sends their credentials (username and password) to the authentication server.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-blue-500 dark:text-blue-400">
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">2. Token Issuance:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Upon successful authentication, the server creates a JWT and sends it back to the client.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-blue-500 dark:text-blue-400">
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">3. Token Storage:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">The client typically stores the JWT in <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">localStorage</code> or <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">sessionStorage</code> (or a secure HTTP-only cookie).</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-blue-500 dark:text-blue-400">
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">4. Accessing Protected Routes:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">For subsequent requests to protected resources, the client sends the JWT (usually in the <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">Authorization</code> header as a <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded">Bearer</code> token).</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-blue-500 dark:text-blue-400">
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">5. Token Verification:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">The server verifies the JWT's signature and checks its claims (e.g., expiry, issuer) to authenticate and authorize the user for the requested action.</Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Benefits of Using JWT */}
        <Card className="mb-8 p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              Key Benefits of JWT Tokens
            </Typography>
            <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-green-500 dark:text-green-300">
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Statelessness:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Servers don't need to store session data, making them highly scalable and resource-efficient.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-green-500 dark:text-green-300">
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Compact & Self-contained:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">JWTs carry all necessary user information, reducing the need for database lookups on every request.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-green-500 dark:text-green-300">
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Mobile Friendly:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Ideal for mobile applications and single-page applications that interact with APIs.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-green-500 dark:text-green-300">
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Cross-domain Compatibility:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Can be easily used across different domains and services, enabling Single Sign-On (SSO).</Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Security Considerations for JWT */}
        <Card className="mb-8 p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-4">
              Security Best Practices for JWT
            </Typography>
            <Typography paragraph className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              While powerful, JWTs require careful handling to maintain security:
            </Typography>
            <List className="space-y-4">
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-red-500 dark:text-red-400">
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Use Strong Secrets:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Always use long, complex, and securely stored secret keys for signing JWTs. Never hardcode them.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-red-500 dark:text-red-400">
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Set Expiration Times (exp):</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Implement short expiration times for access tokens and use refresh tokens for longer sessions to mitigate token theft risks.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-red-500 dark:text-red-400">
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Don't Store Sensitive Data in Payload:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">JWT payloads are only encoded, not encrypted. Do not put sensitive information directly into the payload.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-red-500 dark:text-red-400">
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Secure Token Storage:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">Store JWTs securely on the client-side. HTTP-only cookies can protect against XSS, while localStorage/sessionStorage are vulnerable.</Typography>}
                />
              </ListItem>
              <ListItem className="flex items-start">
                <ListItemIcon className="min-w-0 mr-3 text-red-500 dark:text-red-400">
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography className="font-semibold text-gray-900 dark:text-gray-100">Implement Revocation:</Typography>}
                  secondary={<Typography className="text-gray-700 dark:text-gray-300">For scenarios requiring immediate token invalidation (e.g., logout, password change), implement a revocation mechanism like a blocklist or short-lived tokens.</Typography>}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Box className="text-center mt-12 mb-8">
          <Typography variant="h3" component="h2" className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-6">
            Ready to Implement JWT?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://jwt.io/introduction" // Example link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Explore JWT Implementation Guides & Tools
          </Button>
          <Typography className="mt-4 text-gray-600 dark:text-gray-300">
            Learn more about <Link href="https://jwt.io/" target="_blank" rel="noopener" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-medium">JWT at jwt.io</Link> for detailed specifications and examples.
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
