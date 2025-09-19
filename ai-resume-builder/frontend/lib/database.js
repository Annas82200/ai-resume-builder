// frontend/lib/database.js
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data');
const REQUESTS_FILE = path.join(DB_PATH, 'example-requests.json');
const EXAMPLES_FILE = path.join(DB_PATH, 'generated-examples.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(DB_PATH, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

// Example Requests Functions
export async function saveExampleRequest(request) {
  await ensureDataDir();
  
  let requests = [];
  try {
    const data = await fs.readFile(REQUESTS_FILE, 'utf-8');
    requests = JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet
  }
  
  requests.push({
    ...request,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    status: 'pending'
  });
  
  await fs.writeFile(REQUESTS_FILE, JSON.stringify(requests, null, 2));
  return requests[requests.length - 1];
}

export async function getExampleRequests(status = null) {
  await ensureDataDir();
  
  try {
    const data = await fs.readFile(REQUESTS_FILE, 'utf-8');
    const requests = JSON.parse(data);
    
    if (status) {
      return requests.filter(r => r.status === status);
    }
    return requests;
  } catch (error) {
    return [];
  }
}

export async function updateRequestStatus(id, status) {
  const requests = await getExampleRequests();
  const index = requests.findIndex(r => r.id === id);
  
  if (index !== -1) {
    requests[index].status = status;
    await fs.writeFile(REQUESTS_FILE, JSON.stringify(requests, null, 2));
    return requests[index];
  }
  return null;
}

// Generated Examples Functions
export async function saveGeneratedExample(example) {
  await ensureDataDir();
  
  let examples = [];
  try {
    const data = await fs.readFile(EXAMPLES_FILE, 'utf-8');
    examples = JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet
  }
  
  examples.push({
    ...example,
    id: example.id || Date.now().toString(),
    createdAt: new Date().toISOString()
  });
  
  await fs.writeFile(EXAMPLES_FILE, JSON.stringify(examples, null, 2));
  return examples[examples.length - 1];
}

export async function getGeneratedExamples(industry = null) {
  await ensureDataDir();
  
  try {
    const data = await fs.readFile(EXAMPLES_FILE, 'utf-8');
    const examples = JSON.parse(data);
    
    if (industry) {
      return examples.filter(e => e.industry.toLowerCase() === industry.toLowerCase());
    }
    return examples;
  } catch (error) {
    return [];
  }
}

// Stats function
export async function getDashboardStats() {
  const requests = await getExampleRequests();
  const examples = await getGeneratedExamples();
  
  return {
    totalRequests: requests.length,
    pendingRequests: requests.filter(r => r.status === 'pending').length,
    completedRequests: requests.filter(r => r.status === 'completed').length,
    totalExamples: examples.length,
    examplesByIndustry: examples.reduce((acc, ex) => {
      const industry = ex.industry || 'Other';
      acc[industry] = (acc[industry] || 0) + 1;
      return acc;
    }, {}),
    recentRequests: requests.slice(-5).reverse()
  };
}
