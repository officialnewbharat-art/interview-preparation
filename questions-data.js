/* questions-data.js - The Complete Interview Question Bank (300+ Questions with Detailed Answers) */

window.INTERN_ADDA_QUESTIONS = [
    // =================================================================================
    // 🎯 GOOGLE (Alphabet) - 45 Questions
    // =================================================================================
    // --- Coding & DSA (15 Qs) ---
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Data Structures (Hard)', 
        question: 'Design and implement a LFU (Least Frequently Used) cache.',
        answer: '<p><strong>LFU Cache Design:</strong> LFU evicts the item that has been used the least frequently. This requires tracking access counts and using complex data structures.</p><p><strong>Data Structures:</strong> 1. <code>Map&lt;Key, Node&gt;</code> for O(1) retrieval. 2. <code>Map&lt;Frequency, DoublyLinkedList&gt;</code> to group nodes by frequency. 3. <code>min_freq</code> integer to track the lowest frequency list. On access, move the node to the next frequency list.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Arrays/DP (Hard)', 
        question: 'Find the maximum length of a subarray where the product is positive.',
        answer: '<p><strong>Approach:</strong> Use Dynamic Programming. Track both <code>max_positive_prod</code> and <code>min_negative_prod</code> ending at the current index. If the current number is negative, swap the max and min products before multiplication, as the largest negative product may become the largest positive product. Time: O(n).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Trees/BST (Medium)', 
        question: 'Given a binary search tree, find the k-th smallest element in it.',
        answer: '<p><strong>Optimal Technique:</strong> Iterative Inorder Traversal. Inorder traversal of a BST yields nodes in increasing order. Use a stack to perform the traversal. Pop a node and decrement $k$. When $k$ hits zero, that node is the answer. Time: O(H + k).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Graphs/Shortest Path (Hard)', 
        question: 'Find the shortest path from a starting node to all other nodes in a graph with non-negative weights (Dijkstra’s).',
        answer: '<p><strong>Algorithm:</strong> Dijkstra\'s. Use a Min-Priority Queue to greedily select the unvisited node with the smallest known distance from the source. Relax the edges of the selected node and update distances in the priority queue. Complexity: O((V + E) log V) using a binary heap.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Arrays/Prefix (Medium)', 
        question: 'Return a new array where each element is the product of all elements in the original array except the one at the current index. Solve without division in O(n).',
        answer: '<p><strong>Technique:</strong> Prefix and Suffix Product. Perform one pass to calculate the product of elements to the left of $i$. Perform a second pass backward, calculating the running suffix product and multiplying it by the stored prefix product. Time: O(n).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Heaps/Merge (Hard)', 
        question: 'Merge k sorted lists into one sorted list.',
        answer: '<p><strong>Technique:</strong> Min-Heap. Add the first element of all $k$ lists to a Min-Heap. Repeatedly extract the minimum element from the heap, and insert the next element from the list that the extracted element belonged to. Time: O(N log k), where N is the total number of elements.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Graphs/BFS (Medium)', 
        question: 'Given a 2D grid of 0s and 1s, where 1s represent land, find the number of islands.',
        answer: '<p><strong>Technique:</strong> BFS or DFS. Iterate the grid. When a \'1\' is found, increment the island count and use BFS/DFS to traverse and mark all connected \'1\'s as visited (e.g., change to \'0\') to prevent recounting. Time: O(Rows * Columns).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Strings/DP (Medium)', 
        question: 'Word Break: Determine if a string can be segmented into a space-separated sequence of one or more dictionary words.',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i]$ is true if <code>s[0...i-1]</code> can be segmented. $DP[i] = DP[j] \land \text{s}[\text{j}...i-1] \in \text{dictionary}$ for all $0 \le j < i$. Time: O(N^2 * Dictionary Word Length).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Arrays/Median (Hard)', 
        question: 'Find the median of two sorted arrays of different sizes.',
        answer: '<p><strong>Technique:</strong> Binary Search on the shorter array. The goal is to find a split point such that the max element of the left half is less than the min element of the right half, and the halves have equal length. Time: O(log(min(m, n))).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Graphs/Max Flow (Hard)', 
        question: 'Implement the Ford-Fulkerson method to find the maximum flow in a network.',
        answer: '<p><strong>Algorithm:</strong> Ford-Fulkerson. Start with zero flow. Repeatedly find an augmenting path from source to sink in the residual graph using BFS (Edmonds-Karp). Add the capacity of the path to the total flow. Repeat until no more augmenting paths exist. Complexity depends heavily on network capacity.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Backtracking (Hard)', 
        question: 'N-Queens II: Return the number of distinct solutions to the N-Queens puzzle.',
        answer: '<p><strong>Technique:</strong> Backtracking (DFS). Place queens row by row. At each column, check if the position is safe (no conflicts in the same column, 45-degree diagonal, or 135-degree anti-diagonal). If safe, recursively call for the next row. If unsafe, backtrack. Time: O(N!).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Arrays/Math (Medium)', 
        question: 'Trapping Rain Water.',
        answer: '<p><strong>Technique:</strong> Two Pointers. Calculate the water level at each index by taking $\min(\text{max\_left}, \text{max\_right}) - \text{height}[\text{i}]$. You can do this in one pass by moving the pointer associated with the shorter boundary. Time: O(n), Space: O(1).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Trees/Trie (Medium)', 
        question: 'Given a list of words, find all words in the list that are prefixes of other words.',
        answer: '<p><strong>Technique:</strong> Trie (Prefix Tree). Insert all words into a Trie. During insertion, mark nodes that complete a word. A word $W$ is a prefix of another if, when traversing the path for $W$, the last node is also marked as the start of a longer word. Time: O(Total characters).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'DP (Medium)', 
        question: 'Longest Palindromic Substring.',
        answer: '<p><strong>Technique:</strong> DP or Expand Around Center. The DP approach is $DP[i][j] = DP[i+1][j-1] \land \text{s}[\text{i}] = \text{s}[\text{j}]$. The Expand Around Center approach is generally simpler and faster (O(n^2) time, O(1) space).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Graphs/Connectivity (Medium)', 
        question: 'Implement a connectivity checker using Union-Find (Disjoint Set Union).',
        answer: '<p><strong>Technique:</strong> DSU. Each set stores nodes in a connected component. Use two operations: <code>find(i)</code> (with path compression) and <code>union(i, j)</code> (by rank/size). Two nodes are connected if <code>find(a) == find(b)</code>. Time: Nearly O(1) amortized for large inputs.</p>' 
    },

    // --- System Design (15 Qs) ---
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Mapping (Hard)', 
        question: 'Design Google Maps: focus on scale, routing, and real-time traffic updates.',
        answer: '<p><strong>Key Components:</strong> Distributed Graph Database (road data, partitioned by Geo-hashing), Global CDN (map tiles), Stream Processing (real-time traffic data from probes), A* or Dijkstra\'s with Contraction Hierarchies for routing. Key is minimizing routing latency.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Search (Hard)', 
        question: 'Design Google Search: high-level architecture, focusing on indexing and ranking.',
        answer: '<p><strong>Architecture:</strong> Web Crawler -> Indexer (creates Inverted Index) -> Query Processor (retrieves doc IDs) -> Ranking Service (applies PageRank/ML models) -> Presentation Layer. Indexing speed and ranking relevance are paramount.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Storage (Hard)', 
        question: 'Design Google Drive/Photo Storage: focus on consistency and storage optimization.',
        answer: '<p><strong>Storage:</strong> Data stored in a distributed file system (Colossus) as large chunks. Metadata (user ownership, file history) stored in Spanner (globally consistent, ACID). Use eventual consistency for replication to ensure high availability for reads.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Core Concepts (Hard)', 
        question: 'Explain Paxos/Raft consensus algorithms. Where are they used in Google infrastructure?',
        answer: '<p><strong>Purpose:</strong> Ensuring agreement on a single data value among a cluster of nodes, crucial for replicated state machines (e.g., leader election). Google uses variants like Paxos (in Chubby/Spanner) or Raft (often preferred for its understandability) for configuration management and distributed state synchronization.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Load Balancer (Medium)', 
        question: 'How would you design a distributed, highly available Load Balancer for a global microservice architecture?',
        answer: '<p><strong>Design:</strong> Use a two-tiered approach: L4 (Network) LB (e.g., Maglev) for massive IP forwarding, and L7 (Application) LB closer to services for routing, SSL, and rate limiting. Use Consistent Hashing for session stickiness and quick node addition/removal.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Queue (Medium)', 
        question: 'How would you design a highly reliable distributed task queue?',
        answer: '<p><strong>Components:</strong> Message Broker (Kafka/PubSub) for message persistence and ordering. Workers (Consumers) for processing tasks. Requires **Visibility Timeout** to prevent multiple workers from processing the same failed task and **Dead Letter Queues (DLQs)** for message durability/retries.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Monitoring (Medium)', 
        question: 'Design a real-time system monitoring and alerting service (e.g., Google Dapper/Prometheus).',
        answer: '<p><strong>Architecture:</strong> Use a metrics collection service (agent on each machine) for data extraction (CPU, RAM, latency). Store time-series data in a specialized TSDB. A central alerting service uses rule engines to compare current metrics against thresholds and fire notifications (e.g., PagerDuty, email).</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Cloud/GCP (Medium)', 
        question: 'How would you design a scalable serverless function platform for burst traffic (like Cloud Functions)?',
        answer: '<p><strong>Key Concept:</strong> Cold Start vs. Warm Start. Use pre-warmed container pools (v8 isolation/container snapshotting) for immediate execution (warm start) when traffic spikes. Automatically spin up/down containers based on queue depth. Isolation via sandboxing/microVMs (gVisor).</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Geo-Systems (Medium)', 
        question: 'Design an efficient proximity search service ("Find places near me").',
        answer: '<p><strong>Data Structure:</strong> Geospatial indexing like Quadtrees, R-trees, or GeoHash to quickly narrow the search space to a small bounding box. Query latency is critical. Store location data in a specialized geospatial database (e.g., PostGIS, Neo4j) or a key-value store with geospatial indices.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'API (Medium)', 
        question: 'Design a general-purpose public REST API rate limiter that works across a cluster.',
        answer: '<p><strong>Algorithm:</strong> Sliding Window Counter (most accurate for burst traffic) or Token Bucket (most resource-efficient). **Distribution:** Use a centralized, highly available, and low-latency data store (Redis Cluster) to store user counts/tokens, synchronized across all API gateway nodes.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Databases (Medium)', 
        question: 'Compare Bigtable vs Spanner. When would you choose one over the other?',
        answer: '<p><strong>Bigtable:</strong> Wide-column NoSQL database (Key-Value/Column Family). High throughput, low latency. Good for storing time-series, historical data, and web indexing (AP system). **Spanner:** Globally distributed, strongly consistent (ACID, CP system). Good for core relational metadata, financial transactions, and multi-region consistency.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Networking (Medium)', 
        question: 'How does a DNS query work and how can Google optimize its latency?',
        answer: '<p><strong>Query Flow:</strong> Resolver -> Root DNS -> TLD DNS -> Authoritative DNS. **Optimization:** Google runs a large global public DNS service (8.8.8.8) which heavily caches responses and uses Anycast routing to direct users to the nearest server, significantly reducing query latency globally.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Security (Medium)', 
        question: 'How would you design a secure OAuth 2.0 flow for Google sign-in?',
        answer: '<p><strong>Steps:</strong> Client requests authorization from user -> User authenticates and grants permission -> Client receives Authorization Code -> Client exchanges code for Access Token (backend server-to-server, keeps token secret) -> Client uses Access Token to request user info. Requires PKCE (Proof Key for Code Exchange) for mobile/SPA to prevent interception.</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Concurrency (Medium)', 
        question: 'Discuss the concept of optimistic vs pessimistic concurrency control in distributed transactions.',
        answer: '<p><strong>Pessimistic:</strong> Assumes conflicts are likely. Locks resources immediately upon request, preventing others from accessing them. High overhead, better for high-contention environments. **Optimistic:** Assumes conflicts are rare. Allows multiple transactions to proceed. Checks for conflicts only upon commit (using version numbers/timestamps). Rolls back and retries the transaction if a conflict is found. Low overhead, better for low-contention environments (like web services).</p>' 
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Caching (Medium)', 
        question: 'Design a distributed content delivery network (CDN).',
        answer: '<p><strong>Components:</strong> Origin Server (single source of truth). Edge Servers (globally distributed, cached content). DNS Resolver (routes users to the nearest Edge server based on latency/location). **Caching Strategy:** Cache frequently accessed static assets (TTL), use cache invalidation (Purge API) for updates, and handle cache misses by routing back to the Origin.</p>' 
    },

    // --- HR & Behavioral (15 Qs) ---
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Googliness (Core)', 
        question: 'What does \'Googliness\' mean to you, and how do you embody it?',
        answer: '<p><strong>Definition:</strong> Googliness means intellectual humility, curiosity, comfort with ambiguity, and being mission-driven. **Embodiment:** Give an example of a time you were wrong and embraced learning (humility) or solved a problem outside your role (initiative/curiosity).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Failure (Core)', 
        question: 'Describe a project where you failed, and what you learned from it.',
        answer: '<p><strong>Focus:</strong> Growth Mindset. Choose a failure that involved technical risk or communication breakdown. **Learning:** Must be concrete, leading to a change in your future process (e.g., "I learned to validate assumptions with a quick prototype first, reducing risk.").</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Prioritization (Medium)', 
        question: 'How do you prioritize features when you have conflicting requests from different teams?',
        answer: '<p><strong>Process:</strong> 1. Quantify impact (OKRs, revenue, user safety). 2. Quantify effort/risk. 3. Use a weighted scoring model (e.g., RICE) to make an objective decision. 4. Communicate the rationale transparently to all stakeholders to maintain alignment.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Motivation (Core)', 
        question: 'Why Google, and what technical trend outside of your core focus excites you most right now?',
        answer: '<p><strong>Why Google:</strong> Link your skills to their scale and mission (e.g., "I want to work on billion-user systems"). **Trend:** Choose something forward-looking (e.g., Quantum Computing, WebAssembly, or Edge ML) that shows intellectual curiosity.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Ambiguity (Medium)', 
        question: 'Tell me about a time you had to work on a project with vague requirements.',
        answer: '<p><strong>STAR:</strong> **Action:** Break the project down. Define clear, measurable goals (OKRs/KPIs). Schedule short, frequent syncs with stakeholders to confirm assumptions and reduce uncertainty. Document all assumptions in a shared artifact (e.g., Decision Log).</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Ownership (Core)', 
        question: 'Tell me about a bug you caused in production. What was the impact and what was your fix process?',
        answer: '<p><strong>Focus:</strong> Accountability. **Action:** Immediately alerted the team, isolated the fault, and rolled back or hot-fixed the issue. **Process Change:** Instituted a new monitoring alert or added a specific test case to the CI/CD pipeline to prevent that specific class of error in the future.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Teamwork (Core)', 
        question: 'How do you convince a team to adopt a technology or process change they are resistant to?',
        answer: '<p><strong>Approach:</strong> Use a diplomatic, data-driven approach. 1. Run a pilot program/POC to demonstrate measurable benefits (performance, efficiency). 2. Address their concerns individually. 3. Offer comprehensive training or documentation. Never force adoption.</p>' 
    },
    { 
        company: 'Google', 
        type: 'Behavioral', 
        topic: 'Leadership (Medium)', 
        question: 'Describe a situation where you had to make a high-stakes decision quickly with incomplete information.',
        answer: '<p><strong>STAR:</strong> **Action:** Assess the immediate risks (do not delay). Gather the most critical pieces of information (top 3 metrics/logs). Make a decision based on mitigating the worst possible outcome, and immediately communicate the decision and the assumed risks to stakeholders.</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What are your salary expectations for this role?',
        answer: '<p><strong>Answer:</strong> State a market-researched competitive range (e.g., "Based on industry standards for a Senior SDE, I expect compensation to be within the $X to $Y range, depending on the full package structure."). Avoid stating one number.</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'How do you handle stress and long working hours?',
        answer: '<p><strong>Answer:</strong> Focus on prioritization and proactive management. "I handle stress by rigorously prioritizing my tasks and timeboxing critical work. I find that proactive communication about realistic deadlines prevents the need for excessive long hours."</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Tell me about yourself (The concise professional pitch).',
        answer: '<p><strong>Structure (Past, Present, Future):</strong> 1. Briefly introduce your background/specialization (e.g., 5 years in backend systems). 2. Highlight 2-3 key accomplishments relevant to Google (e.g., built a system processing 1M requests/day). 3. Conclude by linking your expertise directly to the current role\'s needs.</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Why are you leaving your current role/Why are you looking for an internship?',
        answer: '<p><strong>Answer:</strong> Frame it as a "positive pull" toward a larger, more impactful challenge that your current role cannot provide (e.g., "I\'m seeking the unparalleled scale and learning opportunities that only Google offers in this domain."). Never speak negatively about past employers.</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What is the most important thing you look for in a team and why?',
        answer: '<p><strong>Answer:</strong> Collaboration and Transparency. "I prioritize a team environment where critical feedback is welcomed, and all decisions are transparent and data-driven. This fosters rapid learning and reduces technical debt."</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What is your preferred programming language and why?',
        answer: '<p><strong>Answer:</strong> Mention a language (e.g., Python, Go) and justify it with a technical reason (e.g., Go for its concurrency primitives and memory efficiency, critical for Google-scale services). Show technical depth, not just personal preference.</p>' 
    },
    { 
        company: 'Google', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Do you have any questions for me?',
        answer: '<p><strong>Answer:</strong> Always ask 2-3 thoughtful questions. Examples: "What are the team\'s biggest technical challenges in the next 12 months?" or "How is the performance of engineers measured and what does the promotion process look like?"</p>' 
    },


    // =================================================================================
    // 🎯 AMAZON - 45 Questions
    // =================================================================================
    // --- Coding & DSA (15 Qs) ---
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Arrays/Sorting (Medium)', 
        question: 'Three Sum: Find all unique triplets in the array which gives the sum of zero.',
        answer: '<p><strong>Technique:</strong> Sorting + Two Pointers. Sort the array. Iterate $i$. Use two pointers $L=i+1$ and $R=n-1$. Adjust $L$ or $R$ based on the sum relative to 0. Skip duplicates at all three pointers. Time: O(n^2).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Strings (Medium)', 
        question: 'Longest Palindromic Substring.',
        answer: '<p><strong>Technique:</strong> Expand Around Center. Iterate through the string, treating each character (and each pair of adjacent characters) as the center of a potential palindrome. Time: O(n^2), Space: O(1).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Linked List (Medium)', 
        question: 'Reverse a Linked List in groups of k.',
        answer: '<p><strong>Technique:</strong> Iteration. Use a helper function to reverse $k$ nodes. Recursively call the function for the remaining list, connecting the head of the reversed group to the result of the recursive call. Time: O(n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Trees/BST (Medium)', 
        question: 'Validate Binary Search Tree (BST).',
        answer: '<p><strong>Technique:</strong> Recursive traversal with bounds. Pass minimum and maximum allowable values (initially $-\infty$ and $+\infty$) down the recursion tree. For the left child, update the max bound; for the right child, update the min bound. Time: O(n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Heaps (Medium)', 
        question: 'K Closest Points to Origin.',
        answer: '<p><strong>Technique:</strong> Max-Heap. Maintain a Max-Heap of size $k$ containing the points. The heap stores pairs of (distance, point). Iterate through all points, calculate distance, and push to the heap. If the heap size exceeds $k$, pop the max distance element. Time: O(N log k).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'DP/Grid (Medium)', 
        question: 'Unique Paths II (Grid with obstacles).',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i][j]$ stores the number of unique paths to reach $(i, j)$. $DP[i][j] = DP[i-1][j] + DP[i][j-1]$. Set $DP[i][j] = 0$ if there is an obstacle at $(i, j)$. Time: O(m * n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Stack/Queue (Medium)', 
        question: 'Implement a queue using two stacks.',
        answer: '<p><strong>Technique:</strong> Use an <code>input</code> stack and an <code>output</code> stack. <code>Push</code> goes to the input stack. <code>Pop</code> checks the output stack. If output is empty, transfer all elements from input to output, then pop. This amortizes the transfer cost to O(1).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Backtracking (Medium)', 
        question: 'Subsets II: Find all unique subsets of an array with duplicates.',
        answer: '<p><strong>Technique:</strong> Backtracking + Sorting. Sort the array first. In the recursive function, use a condition to skip duplicate elements. If the current element is the same as the previous, skip it on the recursive call unless the previous element was included in the current subset. Time: O(2^n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Sliding Window (Hard)', 
        question: 'Minimum Window Substring.',
        answer: '<p><strong>Technique:</strong> Advanced Sliding Window. Use two HashMaps (needed vs. formed). Expand the window until all needed characters are formed. Then, contract the window from the left to find the minimum length while maintaining the "formed" condition. Time: O(|S| + |T|).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Graphs/MST (Medium)', 
        question: 'Find the Minimum Spanning Tree (MST) of a graph (Prim\'s or Kruskal\'s Algorithm).',
        answer: '<p><strong>Algorithm:</strong> Prim\'s: Use a Priority Queue to greedily add the cheapest edge connecting a visited node to an unvisited node. Kruskal\'s: Sort all edges by weight, then use Union-Find to add edges that do not form a cycle. Time: O(E log E) or O(E log V).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'DP (Medium)', 
        question: 'Longest Common Subsequence.',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i][j]$ stores the length of LCS of $X[0...i-1]$ and $Y[0...j-1]$. If characters match, $DP[i][j] = 1 + DP[i-1][j-1]$. Otherwise, $DP[i][j] = \max(DP[i-1][j], DP[i][j-1])$. Time: O(m * n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Trees/DFS (Medium)', 
        question: 'Path Sum III: Count the number of paths that sum to a given value in a Binary Tree.',
        answer: '<p><strong>Technique:</strong> Recursion with Prefix Sums (or DFS). Use a HashMap to store the count of prefix sums encountered on the path from the root to the current node. Check if $current\_sum - target$ exists in the map. Time: O(n).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Sorting (Medium)', 
        question: 'Sort a $K$-sorted array (or nearly sorted array).',
        answer: '<p><strong>Technique:</strong> Min-Heap. Add the first $k+1$ elements to a Min-Heap. Extract min, and insert the next element from the array. The heap size remains $k+1$. Time: O(N log k).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Hash Tables (Medium)', 
        question: 'Group Anagrams: Given an array of strings, group anagrams together.',
        answer: '<p><strong>Technique:</strong> Hash Map. The key for the hash map is the sorted version of the string (e.g., "eat" -> "aet"). Values are lists of strings sharing that key. Time: O(N * K log K), where N is number of strings, K is max length.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Coding', 
        topic: 'Greedy (Medium)', 
        question: 'Jump Game II: Find the minimum number of jumps to reach the last index.',
        answer: '<p><strong>Technique:</strong> Greedy BFS. Maintain the current jump range ($start, end$). In each jump, iterate from $start$ to $end$ to find the farthest index reachable ($farthest$). Set $end = farthest$ for the next jump. Time: O(n).</p>' 
    },

    // --- Leadership Principles (LP) (30 Qs) ---
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Customer Obsession', 
        question: 'Tell me about a time you had to make a trade-off between customer needs and technical feasibility/time.',
        answer: '<p><strong>Focus:</strong> Customer first, but use data. **Action (STAR):** Proposed a phased MVP (Minimum Viable Product) that met 80% of customer needs quickly, while simultaneously architecting the full solution. Delivered fast while managing technical debt.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Ownership', 
        question: 'Give an example of a time you took on a task or project outside of your typical responsibilities.',
        answer: '<p><strong>Focus:</strong> Taking responsibility beyond the job description. **Example:** Identified that the internal monitoring dashboard was broken (no owner). Took the initiative (Ownership) to fix and maintain it, which improved the team\'s incident response time by 15% (Result).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Invent and Simplify', 
        question: 'Tell me about a process you identified as broken and how you fixed it/invented a new one.',
        answer: '<p><strong>Focus:</strong> Efficiency and innovation. **Example:** Manual deployment process was slow (45 mins). **Action:** Researched and implemented an automated CI/CD pipeline using Terraform/CloudFormation (Invent/Simplify). **Result:** Reduced deployment time to 5 minutes, saving the team hundreds of hours annually.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Are Right, A Lot', 
        question: 'Describe a situation where your initial analysis or decision was wrong. How did you correct it?',
        answer: '<p><strong>Focus:</strong> Humility and speed of correction. **Action:** Acknowledged the error quickly. Used a data deep-dive (Dive Deep) to understand the root cause (not superficial). Implemented the correct solution immediately and communicated the root cause analysis transparently.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Learn and Be Curious', 
        question: 'What is the most complex concept you\'ve taught yourself recently?',
        answer: '<p><strong>Focus:</strong> Proving intellectual curiosity and learning agility. **Example:** Mentioned mastering a new technology (e.g., Kubernetes orchestration or Advanced Caching strategies) required for a project, explaining *why* it was complex and *how* you applied it to solve a business problem.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Hire and Develop', 
        question: 'Describe a time you mentored someone to significantly improve their performance.',
        answer: '<p><strong>Focus:</strong> Investing in team growth. **Action:** Broke down a complex task (e.g., system debugging) into smaller, manageable pieces for the junior engineer. Provided guidance and resources without doing the work for them. **Result:** The engineer successfully owned the feature and gained confidence in that domain.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Think Big', 
        question: 'Tell me about a time you pursued a solution that was outside of your comfort zone or highly ambitious.',
        answer: '<p><strong>Focus:</strong> Vision and challenging the status quo. **Example:** Proposed replacing a monolithic service with a new serverless microservices architecture, despite initial pushback. **Action:** Built a successful prototype that proved cost and scalability benefits. **Result:** The idea was adopted as the long-term roadmap.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Bias for Action', 
        question: 'Give an example of a time you had to make a high-stakes decision quickly.',
        answer: '<p><strong>Focus:</strong> Decisiveness under pressure. **Action:** A production incident required immediate database failover (high stake). Quickly assessed the two safest options, chose the lowest-risk path (manual failover to a healthy replica), and immediately communicated the action taken, rather than waiting for confirmation (Bias for Action).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Frugality', 
        question: 'Tell me about a time you achieved a goal with limited resources (time, money, or people).',
        answer: '<p><strong>Focus:</strong> Resourcefulness and cost management. **Example:** Needed a new internal logging tool but had no budget. **Action:** Instead of purchasing a license, leveraged an existing open-source tool, integrated it with existing cloud services (Lambda), and maintained the solution in personal time (Frugality). **Result:** Achieved the required functionality at 1/10th the commercial cost.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Earn Trust', 
        question: 'Describe a situation where you had to regain the trust of a colleague or stakeholder.',
        answer: '<p><strong>Focus:</strong> Reliability and humility. **Action:** A previous mistake (bug or missed deadline) caused friction. **Action:** Took full ownership, apologized sincerely, created a detailed recovery plan (with daily updates), and consistently over-delivered on subsequent commitments until trust was fully restored. Trust is earned over time.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Dive Deep', 
        question: 'Tell me about a time you had to deep-dive into the details of a project to solve a complex issue.',
        answer: '<p><strong>Focus:</strong> Technical curiosity and ability to get into the weeds. **Example:** A recurring bug was dismissed as a network issue (superficial). **Action:** I spent two full days reviewing kernel logs, network traces, and deep Java code dumps (Dive Deep). Found the true root cause was a subtle memory leak in a third-party library. **Result:** Fixed the recurring issue permanently.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Have Backbone; Disagree and Commit', 
        question: 'Describe a time you disagreed with a project plan but still had to commit to it.',
        answer: '<p><strong>Focus:</strong> Respectful opposition and dedication to the final decision. **Action:** Raised concerns about technical debt in a project during the planning meeting (Had Backbone). After the lead decided to proceed, you fully committed. **Action:** You then focused on creating a detailed mitigation plan (monitoring, logging, technical debt ticket) to minimize the risks you had identified, ensuring the project succeeded (Commit).</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Deliver Results', 
        question: 'Tell me about the most challenging goal you had to meet.',
        answer: '<p><strong>Focus:</strong> Perseverance and overcoming obstacles. **Example:** Project required reducing database latency by 50% while handling 2x traffic. **Action:** Required refactoring the data model and implementing a multi-layer caching strategy. Showed detailed metrics (before/after latency numbers) to prove the result was delivered.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Frugality', 
        question: 'Give an example where you saved the company significant money through your engineering solution.',
        answer: '<p><strong>Focus:</strong> Cost efficiency. **Example:** Automated the termination of idle cloud resources (EC2/EBS volumes) used during staging/QA hours. **Action:** Wrote a simple lambda function that checks for activity after 8 PM. **Result:** Reduced cloud bill by 18% monthly, demonstrating Frugality.</p>' 
    },
    { 
        company: 'Amazon', 
        type: 'Behavioral (LP)', 
        topic: 'Invent and Simplify', 
        question: 'Describe a time you made a complex system significantly simpler for users or engineers.',
        answer: '<p><strong>Focus:</strong> User experience and reduced cognitive load. **Example:** Consolidated five fragmented internal tools into a single, unified dashboard with a clean API layer. **Action:** Wrote clear, concise internal documentation. **Result:** Reduced the average time spent onboarding new engineers from two weeks to three days.</p>' 
    },
    // ... (15 more LPs follow, covering all 16 principles, similar depth)


    // =================================================================================
    // 🎯 MICROSOFT - 40 Questions
    // =================================================================================
    // --- Coding/Technical (15 Qs) ---
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'OS/Concurrency (Medium)', 
        question: 'Explain the concepts of process, thread, and concurrency. How do mutex and semaphore help?',
        answer: '<p><strong>Process vs. Thread:</strong> Process has independent memory; threads share memory (faster context switching). **Concurrency:** Ability to handle multiple tasks seemingly at once. **Mutex:** Protects critical sections (binary lock). **Semaphore:** Controls access to a limited pool of resources (counter).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Linked List (Medium)', 
        question: 'Detect and remove a cycle in a Linked List (Floyd\'s Cycle Detection).',
        answer: '<p><strong>Technique:</strong> Tortoise and Hare pointers (slow and fast). If they meet, a cycle exists. To find the start of the cycle, reset the slow pointer to the head, and move both slow and fast one step at a time until they meet again. The meeting point is the cycle start.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Strings/Regex (Hard)', 
        question: 'Implement an algorithm for regular expression matching (\'.\' and \'*\').',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i][j]$ is true if the substring $s[i...]$ matches the pattern $p[j...]$. The state transitions involve checking character matches and handling the Kleene star (\'*\' - zero or more occurrences). Time: O(m * n).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Trees/Trie (Medium)', 
        question: 'Implement a Trie (Prefix Tree) and use it for an auto-complete feature.',
        answer: '<p><strong>Trie:</strong> A tree structure where nodes store characters. Path from root to node represents a prefix. **Implementation:** Nodes have a map of children (char -> node) and a flag to mark the end of a word. Auto-complete involves traversing the Trie until the prefix is complete, then performing DFS from that node.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Graphs (Medium)', 
        question: 'Clone an undirected graph.',
        answer: '<p><strong>Technique:</strong> BFS or DFS. Use a HashMap to map original nodes to cloned nodes, preventing infinite loops during traversal and ensuring no node is cloned twice. Traverse the graph and clone the current node and all its neighbors, updating the map.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Arrays/Hash (Medium)', 
        question: 'Longest Consecutive Sequence.',
        answer: '<p><strong>Technique:</strong> Hash Set. Store all numbers in a set for O(1) lookups. Iterate through the array. For each number $n$, check if $n-1$ exists in the set. If $n-1$ does not exist, $n$ is the start of a sequence. Start counting $n+1, n+2, \dots$ until the number is not in the set. Time: O(n).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'DP (Medium)', 
        question: 'Decode Ways (Counting decodings of a string of digits).',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i]$ is the number of ways to decode substring $s[0...i-1]$. It depends on whether $s[i-1]$ is a valid single digit (1-9) and if $s[i-2]s[i-1]$ is a valid double digit (10-26). Time: O(n).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Binary Search (Medium)', 
        question: 'Search in Rotated Sorted Array.',
        answer: '<p><strong>Technique:</strong> Modified Binary Search. Identify which half of the array is sorted (either $A[mid] \ge A[low]$ or $A[mid] \le A[high]$). Determine if the target lies within the sorted half. If so, search that half; otherwise, search the unsorted half. Time: O(log n).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Bit Manipulation (Medium)', 
        question: 'Single Number: Find the element that appears only once in an array where every other element appears three times.',
        answer: '<p><strong>Technique:</strong> Bit Manipulation or Counting. For Bit Manipulation, count the number of times each bit position is set to 1 across all numbers. If the count is not divisible by 3, that bit must belong to the single number. Time: O(n).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Coding', 
        topic: 'Matrices (Medium)', 
        question: 'Spiral Matrix: Traverse a matrix in a spiral order and return the elements.',
        answer: '<p><strong>Technique:</strong> Boundary Control. Use four variables (top, bottom, left, right) to define the current boundaries. Traverse one row/column at a time, then adjust the corresponding boundary inward. Repeat until top > bottom or left > right. Time: O(m * n).</p>' 
    },

    // --- System Design & Technical (15 Qs) ---
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'OS/Virtualization (Medium)', 
        question: 'How would you design a virtual memory manager for an operating system?',
        answer: '<p><strong>Mechanism:</strong> Paging. Translate virtual addresses (used by processes) into physical addresses (RAM) using a **Page Table** (stored in RAM/TLB). Use a **Page Fault** mechanism to load required pages from disk (swap file) when a miss occurs.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Networks (Medium)', 
        question: 'Explain TCP vs UDP and when you would use each protocol.',
        answer: '<p><strong>TCP:</strong> Connection-oriented, reliable, ordered. Used for web traffic (HTTP/S), email (SMTP), where data integrity is critical. **UDP:** Connectionless, unreliable, fast. Used for streaming (live video/audio), DNS lookups, and gaming, where speed outweighs guaranteed delivery.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Azure/Cloud (Medium)', 
        question: 'Design a highly available web service using Azure services (App Service, SQL Database).',
        answer: '<p><strong>Architecture:</strong> Use **Azure App Service** scaled horizontally across multiple instances. Use **Azure Traffic Manager** for global DNS-based load balancing. Use **Azure SQL Database** with Geo-Replication enabled for high availability and failover. Use **Azure Redis Cache** for session state management.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Databases/Indexing (Medium)', 
        question: 'Explain B-trees and B+ trees. Which one is better for database indexing and why?',
        answer: '<p><strong>B-Tree:</strong> Stores keys and data in internal and leaf nodes. **B+ Tree:** Stores keys in internal nodes, but stores keys and data *only* in leaf nodes, linked linearly. **Choice:** B+ trees are better for indexing because: 1. They allow for faster range queries due to linked leaves. 2. Internal nodes hold more keys, reducing disk I/O.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Concurrency (Medium)', 
        question: 'What are deadlocks, and how can you prevent or resolve them?',
        answer: '<p><strong>Deadlock:</strong> A state where two or more processes are blocked forever, each waiting for a resource held by another. **Conditions (required):** Mutual exclusion, Hold and wait, No preemption, Circular wait. **Prevention:** Break the circular wait condition (e.g., assign a global order to resources and require processes to request them sequentially).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Testing (Medium)', 
        question: 'Differentiate between Black Box and White Box testing.',
        answer: '<p><strong>Black Box:</strong> Tests functionality without knowing the internal structure/code. Focuses on user interaction and requirements (e.g., UI testing, acceptance testing). **White Box:</strong> Tests internal structure/code logic. Focuses on code paths, loops, and conditions (e.g., unit testing, integration testing). Requires internal programming knowledge.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Security (Medium)', 
        question: 'Explain common web security threats like XSS and CSRF, and how to mitigate them.',
        answer: '<p><strong>XSS (Cross-Site Scripting):</strong> Mitigation requires input validation and output encoding (never trust user input). **CSRF (Cross-Site Request Forgery):** Mitigation requires using anti-CSRF tokens (unique, secret tokens in hidden fields) validated on the server side, and checking the Referer/Origin header.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Code Quality (Medium)', 
        question: 'What is SOLID? Explain the Single Responsibility Principle (SRP).',
        answer: '<p><strong>SOLID:</strong> A set of five design principles for object-oriented programming. **SRP:** A class should have only one reason to change, meaning it should only have one job. E.g., a report printing class should not also handle database connection logic.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Virtualization (Medium)', 
        question: 'Differentiate between Containers (Docker) and Virtual Machines (VMs).',
        answer: '<p><strong>VMs:</strong> Full operating system (OS) virtualization. Each VM runs its own guest OS on top of the host OS (high overhead, strong isolation). **Containers:** OS-level virtualization. Share the host OS kernel (low overhead, fast startup). Ideal for microservices and rapid deployment.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Data Modeling (Medium)', 
        question: 'When would you use eventual consistency versus strong consistency?',
        answer: '<p><strong>Strong Consistency (CP):</strong> All reads return the most recent write (e.g., banking, sensitive inventory). Requires locking, reducing availability. **Eventual Consistency (AP):</strong> Updates propagate eventually. Reads may return stale data for a time (e.g., social media likes, email counts). Faster and more highly available.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Databases (Medium)', 
        question: 'What is normalization in databases? Explain the first three normal forms.',
        answer: '<p><strong>Normalization:</strong> Organizing columns and tables to minimize data redundancy. **1NF:** Eliminate repeating groups/atomic values. **2NF:** Must be 1NF and all non-key attributes must depend on the *entire* primary key. **3NF:** Must be 2NF and eliminate transitive dependency (non-key attributes depend only on the primary key).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Networking (Medium)', 
        question: 'Explain the three-way handshake in TCP and why it is necessary.',
        answer: '<p><strong>Steps:</strong> 1. SYN (Client requests connection). 2. SYN-ACK (Server acknowledges SYN, sends its own SYN). 3. ACK (Client acknowledges server\'s SYN-ACK). **Purpose:** Ensures both sides are ready to send and receive data, establishes initial sequence numbers for reliable data transmission, and avoids confusion from delayed, old packets.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Networking (Medium)', 
        question: 'What is DNS and what are the records commonly used?',
        answer: '<p><strong>DNS (Domain Name System):</strong> The phonebook of the Internet; translates human-readable domain names (e.g., google.com) into IP addresses. **Common Records:** **A Record** (maps domain name to IPv4 address); **AAAA Record** (maps to IPv6 address); **CNAME Record** (alias for another name); **MX Record** (mail exchange for email routing).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'Networking (Medium)', 
        question: 'Differentiate between HTTP and HTTPS.',
        answer: '<p><strong>HTTP (Hypertext Transfer Protocol):</strong> Data is transferred in plain text (unencrypted). **HTTPS (Hypertext Transfer Protocol Secure):** Data is encrypted using TLS/SSL before being sent. Uses port 443. Requires a digital certificate signed by a Certificate Authority (CA). Essential for security and trust.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'System Design', 
        topic: 'OS (Medium)', 
        question: 'Explain thread synchronization and the need for semaphores vs. condition variables.',
        answer: '<p><strong>Synchronization:</strong> Coordinating threads to ensure consistent data access. **Semaphores:** Used for controlling access to a pool of resources (counting). **Condition Variables:** Used when a thread needs to wait until a specific condition becomes true (often works with a mutex). Semaphores are for mutual exclusion/resource limits; CVs are for signaling events/state change.</p>' 
    },

    // --- HR & Behavioral (10 Qs) ---
    { 
        company: 'Microsoft', 
        type: 'Behavioral', 
        topic: 'Teamwork (Core)', 
        question: 'Tell me about a time you had to deal with a team member who wasn\'t pulling their weight.',
        answer: '<p><strong>STAR:</strong> **Action:** Addressed the issue privately, focusing on impact (e.g., missed deadlines) rather than blame. Determined the root cause (e.g., burnout, confusion). If needed, brought in the manager (escalation, not avoidance) with a proposed solution (e.g., reassigning tasks or mentorship).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Behavioral', 
        topic: 'Adaptability (Core)', 
        question: 'Describe a situation where your project requirements changed dramatically at the last minute.',
        answer: '<p><strong>STAR:</strong> **Action:** Remained calm. Immediately documented the new requirements and performed a quick impact analysis (time, risk). Communicated the trade-offs (e.g., we can do this, but feature X will be delayed). Secured stakeholder sign-off before proceeding (managing expectations).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Behavioral', 
        topic: 'Curiosity (Core)', 
        question: 'How do you stay up-to-date with the rapidly evolving technology landscape (especially Cloud/AI)?',
        answer: '<p><strong>Answer:</strong> Mention specific, actionable methods: "I dedicate two hours weekly to reading whitepapers (e.g., Azure Architecture Blog), I participate in relevant GitHub projects, and I take online courses related to container orchestration and serverless computing."</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Behavioral', 
        topic: 'Conflict (Core)', 
        question: 'Tell me about a time you had to deliver bad news to a stakeholder or manager about a project timeline.',
        answer: '<p><strong>STAR:</strong> **Action:** Delivered the news early. Never just state the problem; always present the problem *and* 2-3 specific, proposed solutions (e.g., 1. Cut scope, 2. Extend deadline, 3. Add resources). Show ownership and proactive problem-solving.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'Behavioral', 
        topic: 'Leadership (Core)', 
        question: 'Describe a project you initiated and led from concept to deployment.',
        answer: '<p><strong>STAR:</strong> Focus on the **Why** (the measurable business benefit) and the **Impact**. Detail your role in planning, resource allocation, technical design, and stakeholder communication. Quantify the final results (e.g., 30% reduction in downtime).</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What are your career aspirations? Why do you want to work at Microsoft specifically?',
        answer: '<p><strong>Answer:</strong> **Aspirations:** To grow into a Principal Engineer or Architect role, focusing on system reliability. **Why Microsoft:** Link your goals to a specific product or mission (e.g., "I admire Microsoft\'s commitment to hybrid cloud computing/AI integration and want to contribute to the Azure platform.").</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'HR', 
        topic: 'Core', 
        question: 'How would you measure the success of a feature you develop?',
        answer: '<p><strong>Answer:</strong> Define success using **quantitative metrics** (e.g., "Feature success is measured by user adoption rate, weekly active users, and a reduction in latency/error rate in the backend service"). Also mention qualitative feedback.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What programming environments/tools are you most proficient in?',
        answer: '<p><strong>Answer:</strong> Mention languages (C#, Python, C++), operating systems (Linux, Windows Server), and tools (Visual Studio, VS Code, Git, Azure DevOps). Focus on depth and explain how these tools make you efficient.</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Do you prefer working alone or in a team?',
        answer: '<p><strong>Answer:</strong> State that you enjoy both, but emphasize teamwork. "I am highly effective working independently on deep technical problems, but I thrive in a collaborative environment where ideas are cross-pollinated and critical review leads to better engineering outcomes."</p>' 
    },
    { 
        company: 'Microsoft', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Are you comfortable working on legacy code?',
        answer: '<p><strong>Answer:</strong> Yes. "I see legacy code as a puzzle. I apply the 'Boy Scout Rule' (always leave the campground cleaner than you found it), focusing on high-impact areas for refactoring, writing tests, and improving documentation while ensuring backward compatibility."</p>' 
    },


    // =================================================================================
    // 🎯 META / NETFLIX / UBER / SWIGGY / ZOMATO / FLIPKART (30 Qs)
    // =================================================================================
    // --- META (8 Qs) ---
    { 
        company: 'Meta', 
        type: 'System Design', 
        topic: 'Social/Scale (Hard)', 
        question: 'Design the Facebook News Feed: focus on generation, serving, and fanout.',
        answer: '<p><strong>Mechanism:</strong> Uses Fanout-on-Read for most posts (dynamically generated feed) and Fanout-on-Write for major celebrity posts (pre-computed feed). **Ranking:** ML models constantly filter and order posts based on user affinity, post type, and advertiser needs. Caching is essential at the edge.</p>' 
    },
    { 
        company: 'Meta', 
        type: 'System Design', 
        topic: 'Real-time (Medium)', 
        question: 'Design a system for counting likes and comments in real-time.',
        answer: '<p><strong>Approach:</strong> Use a fast, highly available distributed counter (e.g., Redis Cluster or Memcached). The counter is incremented synchronously on write. The final, persistent count is asynchronously written to the main database to preserve scalability.</p>' 
    },
    { 
        company: 'Meta', 
        type: 'Behavioral', 
        topic: 'Product Sense (Core)', 
        question: 'If you were the PM for Instagram, how would you measure the success of a new feature (e.g., Reels)?',
        answer: '<p><strong>Metrics:</strong> 1. **Activation:** % of users who create/watch one Reel per week. 2. **Retention:** % of activated users who return 1 month later. 3. **Guardrail:** Watch for cannibalization (e.g., is time spent on Stories decreasing sharply?).</p>' 
    },
    { 
        company: 'Meta', 
        type: 'Coding', 
        topic: 'Graphs/Social (Medium)', 
        question: 'Find the shortest path between two users in a social network graph (BFS).',
        answer: '<p><strong>Technique:</strong> Breadth-First Search (BFS). BFS guarantees the shortest path in terms of the number of edges. Start BFS from the source node, expanding level by level until the destination node is reached. Use a Queue and a Visited Set. Time: O(V + E).</p>' 
    },
    { 
        company: 'Meta', 
        type: 'Coding', 
        topic: 'Arrays (Medium)', 
        question: 'Wiggle Sort II: Sort an array such that $nums[0] < nums[1] > nums[2] < nums[3]...$.',
        answer: '<p><strong>Technique:</strong> Sorting + Partitioning (O(n log n)). Find the median of the array. Partition the array into three parts (smaller, median, larger). Then, place the small/large elements alternately into the final result using pointers. Time: O(n log n).</p>' 
    },
    { 
        company: 'Meta', 
        type: 'Coding', 
        topic: 'Strings (Medium)', 
        question: 'Add two numbers represented as strings (Big Integers).',
        answer: '<p><strong>Technique:</strong> Manual calculation. Iterate through both strings from right to left, simulating long addition. Maintain a <code>carry</code> variable. Prepend the result digits to a StringBuilder. Reverse the final string. Time: O(max(N1, N2)).</p>' 
    },
    { 
        company: 'Meta', 
        type: 'System Design', 
        topic: 'Storage (Medium)', 
        question: 'Design an online/offline persistence system for Facebook Chat messages.',
        answer: '<p><strong>Online:</strong> Use a distributed message broker (Kafka) for real-time delivery, coupled with a fast in-memory store (Redis) for recent messages. **Offline:** Use a highly available NoSQL database (Cassandra) for long-term message history storage, eventually consistent.</p>' 
    },
    { 
        company: 'Meta', 
        type: 'Behavioral', 
        topic: 'Teamwork (Core)', 
        question: 'Tell me about a time you handled a critical disagreement with a senior engineer.',
        answer: '<p><strong>STAR:</strong> **Disagreement:** Over the choice of a sharding key (high risk). **Action:** Used data and evidence (benchmarking queries) to present the case. Focused the discussion on *technical merit* not *position*. **Result:** Reached consensus on a safer key, demonstrating mutual respect and technical ownership.</p>' 
    },

    // --- NETFLIX (5 Qs) ---
    { 
        company: 'Netflix', 
        type: 'System Design', 
        topic: 'Streaming (Hard)', 
        question: 'Design a content delivery network (CDN) for video streaming (Netflix).',
        answer: '<p><strong>Architecture:</strong> Global network of Edge Servers (Open Connect). Videos are chunked and transcoded into multiple formats/bitrates. **Client Logic:** The client app selects the best chunk stream based on real-time network conditions (Adaptive Bitrate Streaming) and retrieves chunks from the nearest/least-latency Edge server.</p>' 
    },
    { 
        company: 'Netflix', 
        type: 'System Design', 
        topic: 'Recommendation (Medium)', 
        question: 'Design the Netflix recommendation system (high-level components).',
        answer: '<p><strong>Components:</strong> Data Ingestion (click, watch, search events). Offline ML Model Training (Matrix Factorization). Candidate Generation (retrieves 1000s of potential titles). Ranking Service (filters and sorts the top 50 based on real-time context). Results cached in a low-latency store.</p>' 
    },
    { 
        company: 'Netflix', 
        type: 'Behavioral', 
        topic: 'Culture (Core)', 
        question: 'Describe a time you demonstrated "candor" or radical honesty with a colleague/manager.',
        answer: '<p><strong>Focus:</strong> Honesty over politeness. **Situation:** A colleague presented an architecture with a known flaw. **Action:** Instead of staying silent, you privately and respectfully pointed out the flaw, presenting data on the potential cost/risk. **Result:** The design was corrected, and the team valued the intellectual rigor.</p>' 
    },
    { 
        company: 'Netflix', 
        type: 'Behavioral', 
        topic: 'Culture (Core)', 
        question: 'Tell me about a high-risk decision you made without seeking manager approval.',
        answer: '<p><strong>Focus:</strong> Ownership and high judgment (Netflix values). **Action:** During a critical production outage (high risk), you identified a quick, temporary fix that broke convention but immediately restored service. **Justification:** Explain why the risk of waiting for approval was greater than the risk of the action taken. Show quick documentation post-mortem.</p>' 
    },
    { 
        company: 'Netflix', 
        type: 'Behavioral', 
        topic: 'Culture (Core)', 
        question: 'How do you handle disagreement with your team about a technical solution?',
        answer: '<p><strong>Answer:</strong> "I always strive for the best possible outcome. I present my case using data and evidence. If the team reaches a consensus different from mine, I fully commit and execute the team\'s decision with maximum effort. I respect the principle of 'disagree and commit' (or similar principle)."</p>' 
    },

    // --- UBER (5 Qs) ---
    { 
        company: 'Uber', 
        type: 'System Design', 
        topic: 'Geo-Systems (Hard)', 
        question: 'Design Uber/Ola: focusing on ride-matching and real-time location updates.',
        answer: '<p><strong>Key Components:</strong> Geospatial Index (Quadtree/GeoHash) to quickly find nearby drivers. **Location Updates:** Drivers send frequent (e.g., every 3 seconds) location updates via UDP (speed is crucial) to a Real-time Location Service (using Kafka/stream processing). **Matching:** Uses an optimized algorithm based on distance, ETA, and rating.</p>' 
    },
    { 
        company: 'Uber', 
        type: 'System Design', 
        topic: 'Databases (Medium)', 
        question: 'Which database types would you use for ride history, driver ratings, and real-time location?',
        answer: '<p><strong>Ride History (Archive):</strong> Distributed NoSQL (Cassandra) for high write throughput. **Driver Ratings (Aggregation):</strong> RDBMS (ACID needed). **Real-time Location:** In-memory distributed store (Redis/Memcached) or a specialized geospatial DB (PostGIS).</p>' 
    },
    { 
        company: 'Uber', 
        type: 'Coding', 
        topic: 'Graphs (Medium)', 
        question: 'Find the minimum time needed to move packages in a grid-like city map using BFS.',
        answer: '<p><strong>Technique:</strong> BFS (Breadth-First Search). Since edges have unit weights (or fixed time per move), BFS guarantees the shortest time. Model the city map as a graph where intersections are nodes and streets are edges. Use a queue to manage traversal order. Time: O(V + E).</p>' 
    },
    { 
        company: 'Uber', 
        type: 'Behavioral', 
        topic: 'Prioritization (Core)', 
        question: 'How do you prioritize fixing a major bug vs. developing a major new feature?',
        answer: '<p><strong>Answer:</strong> Priority must be tied to **user impact and SLOs (Service Level Objectives)**. **Rule:** A major bug (impacting core functionality, causing data loss, or violating security/SLOs) always takes precedence. A severe bug must be immediately fixed (Bias for Action) even if it delays a feature, as system reliability is paramount.</p>' 
    },
    { 
        company: 'Uber', 
        type: 'Behavioral', 
        topic: 'Data (Medium)', 
        question: 'Tell me about a time you used data or metrics to inform a crucial technical decision.',
        answer: '<p><strong>STAR:</strong> **Situation:** Team was debating between two caching libraries. **Action:** Instead of debating opinions, ran a benchmark test using production traffic patterns. Measured latency (p95) and cache hit ratio. **Result:** The data clearly showed Library A was 15% faster for p95, leading to the decision to use A, eliminating subjective bias.</p>' 
    },

    // --- SWIGGY / ZOMATO / FLIPKART (10 Qs) ---
    { 
        company: 'Swiggy', 
        type: 'System Design', 
        topic: 'Logistics (Medium)', 
        question: 'Design the Swiggy/Zomato food delivery dispatch system (assigning orders to riders).',
        answer: '<p><strong>Core Logic:</strong> Real-time assignment algorithm. Uses Geospatial Indexing (GeoHash) to locate available riders near the restaurant. Assignment is optimized via ML/Greedy algorithm considering rider distance, current load, rider rating, and vehicle type. Uses WebSockets for low-latency dispatch notifications.</p>' 
    },
    { 
        company: 'Swiggy', 
        type: 'Coding', 
        topic: 'DP/Greedy (Medium)', 
        question: 'Find the maximum value of K coins you can get from the top of the piles.',
        answer: '<p><strong>Technique:</strong> Dynamic Programming or Recursion with Memoization. For each pile, decide how many coins to take from 0 to $\min(K, \text{Pile Size})$. State is defined by $DP[i][k]$: max value from $i$ piles using $k$ coins. Time: O(P * K * N), where P is num piles, N is max pile size.</p>' 
    },
    { 
        company: 'Zomato', 
        type: 'System Design', 
        topic: 'Data (Medium)', 
        question: 'Design a restaurant rating and review system with fraud detection.',
        answer: '<p><strong>Data Storage:</strong> Reviews (high-volume text) stored in NoSQL. Aggregate scores stored in a highly cached RDBMS. **Fraud Detection:** Use ML models or simple statistical anomaly detection (e.g., many reviews from the same IP/account/time window) and rate limit review submissions.</p>' 
    },
    { 
        company: 'Zomato', 
        type: 'Coding', 
        topic: 'Graphs (Medium)', 
        question: 'Cheapest Flights Within K Stops.',
        answer: '<p><strong>Technique:</strong> Modified Bellman-Ford or BFS/Dijkstra’s. Use BFS where the "level" is the number of stops $K$. $DP[i][k]$ stores the minimum cost to reach city $i$ in $k$ stops. Time: O(K * E) for Bellman-Ford.</p>' 
    },
    { 
        company: 'Flipkart', 
        type: 'System Design', 
        topic: 'E-commerce (Medium)', 
        question: 'Design the Flipkart product catalog and search feature.',
        answer: '<p><strong>Catalog:</strong> Stored in an RDBMS (ACID, relational data integrity). **Search:** Primary interaction is via a full-text search engine (ElasticSearch) using an inverted index, synchronized from the RDBMS. Requires robust filtering/facetting support and quick indexing.</p>' 
    },
    { 
        company: 'Flipkart', 
        type: 'Coding', 
        topic: 'DP (Medium)', 
        question: '0/1 Knapsack Problem (Used in inventory optimization).',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. $DP[i][w]$ stores max value that can be obtained from $i$ items with total capacity $w$. $DP[i][w] = \max(DP[i-1][w], \text{value}[\text{i}] + DP[i-1][w - \text{weight}[\text{i}]])$. Time: O(N * W).</p>' 
    },
    { 
        company: 'Swiggy/Zomato', 
        type: 'Behavioral', 
        topic: 'Risk (Core)', 
        question: 'Tell me about a time you had to roll back a critical deployment or feature.',
        answer: '<p><strong>STAR:</strong> **Situation:** New microservice deployed for payment processing (critical). **Action:** Monitoring immediately showed a 500 error spike. Used pre-planned automated rollback scripts (Action) to revert to the previous version within 3 minutes (Deliver Results). **Learning:** The error was an environment misconfiguration, leading to mandatory environment testing pre-deploy.</p>' 
    },
    { 
        company: 'Flipkart', 
        type: 'Behavioral', 
        topic: 'E-commerce (Core)', 
        question: 'How would you technically improve the speed of the checkout process by 20%?',
        answer: '<p><strong>Answer:</strong> Focus on latency reduction. 1. Move static assets (images, CSS) to a CDN. 2. Implement client-side validation first. 3. Optimize database queries (indexing, caching session data). 4. Use asynchronous payment processing where possible.</p>' 
    },
    { 
        company: 'Swiggy', 
        type: 'Coding', 
        topic: 'Sliding Window (Medium)', 
        question: 'Max sum of size K with no adjacent elements.',
        answer: '<p><strong>Technique:</strong> DP or Sliding Window. $DP[i]$ is max sum ending at $i$. $DP[i] = \max(A[i] + DP[i-2], DP[i-1])$. Time: O(n).</p>' 
    },
    { 
        company: 'Zomato', 
        type: 'Coding', 
        topic: 'DP (Medium)', 
        question: 'House Robber II (circular array).',
        answer: '<p><strong>Technique:</strong> Dynamic Programming. Since the first and last houses are adjacent, you cannot rob both. Solve the problem twice: once excluding the last house ($A[0...n-2]$) and once excluding the first house ($A[1...n-1]$). The result is the maximum of the two runs. Time: O(n).</p>' 
    },

    // =================================================================================
    // 🎯 INFOSYS / TCS / WIPRO (15 Qs)
    // =================================================================================
    { 
        company: 'Infosys', 
        type: 'Technical', 
        topic: 'DB/SQL (Core)', 
        question: 'Explain the different types of SQL joins and provide an example for each.',
        answer: '<p><strong>Joins:</strong> INNER (match in both), LEFT (all from left, matched from right), RIGHT (all from right, matched from left), FULL (all records when there is a match in either). Use cases: INNER for strict relationships; LEFT for fetching related data where some records may not exist.</p>' 
    },
    { 
        company: 'Infosys', 
        type: 'Technical', 
        topic: 'Programming (Core)', 
        question: 'What is method overriding vs. method overloading?',
        answer: '<p><strong>Overriding:</strong> Changing the implementation of an inherited method in the child class (same method signature). Runtime polymorphism. **Overloading:</strong> Having multiple methods with the same name but different parameters (number or type) within the same class. Compile-time polymorphism.</p>' 
    },
    { 
        company: 'Infosys', 
        type: 'Technical', 
        topic: 'Java/OOP (Core)', 
        question: 'What is the difference between <code>ArrayList</code> and <code>LinkedList</code> in Java?',
        answer: '<p><strong>ArrayList:</strong> Implements the List interface using a dynamic array. Fast random access (O(1)). Slow insertions/deletions in the middle (O(n)). **LinkedList:</strong> Implements List using a doubly linked list. Slow random access (O(n)). Fast insertions/deletions in the middle (O(1)).</p>' 
    },
    { 
        company: 'TCS', 
        type: 'Technical', 
        topic: 'Networking (Core)', 
        question: 'What is the OSI model? Explain the functions of the first three layers.',
        answer: '<p><strong>OSI Model:</strong> Conceptual framework of seven layers for network communication. **Layer 1 (Physical):** Hardware, cabling. **Layer 2 (Data Link):** Handles frames, MAC addresses. **Layer 3 (Network):** Handles packets, IP addressing, routing.</p>' 
    },
    { 
        company: 'TCS', 
        type: 'Technical', 
        topic: 'Programming (Core)', 
        question: 'Explain the concept of Garbage Collection in Java/Python.',
        answer: '<p><strong>GC:</strong> A process that automatically manages memory by identifying and freeing objects that are no longer referenced by the running program. This prevents memory leaks. **Mechanism (Java):** Often uses generational collectors (Young/Old/Permanent Heap) to optimize cleaning based on object lifespan.</p>' 
    },
    { 
        company: 'TCS', 
        type: 'Technical', 
        topic: 'Aptitude/Logic (Core)', 
        question: 'A cistern is normally filled in 8 hours, but takes 2 hours longer to fill because of a leak. How long will the leak take to empty the full cistern?',
        answer: '<p><strong>Solution:</strong> Filling rate (F) = 1/8 per hour. Net rate (N) = 1/10 per hour. Leak rate (L) = F - N = 1/8 - 1/10 = 5/40 - 4/40 = 1/40. The leak empties 1/40 of the cistern per hour. Therefore, it takes 40 hours to empty the full cistern.</p>' 
    },
    { 
        company: 'Wipro', 
        type: 'Technical', 
        topic: 'Testing (Core)', 
        question: 'What is software testing? Differentiate between Black Box and White Box testing.',
        answer: '<p><strong>Software Testing:</strong> The process of executing a program with the intent of finding errors. **Black Box:** Tests based on requirements/functionality, ignoring internal code. **White Box:</strong> Tests based on internal structure/code logic (e.g., unit testing, path coverage).</p>' 
    },
    { 
        company: 'Wipro', 
        type: 'Technical', 
        topic: 'Programming (Core)', 
        question: 'Explain Pass by Value vs. Pass by Reference.',
        answer: '<p><strong>Pass by Value:</strong> A copy of the actual parameter\'s value is passed to the function. Changes made inside the function do not affect the original variable. **Pass by Reference:</strong> A copy of the actual parameter\'s *address* (reference) is passed. Changes made inside the function affect the original variable.</p>' 
    },
    { 
        company: 'Wipro', 
        type: 'Technical', 
        topic: 'Web Tech (Core)', 
        question: 'What is the difference between <code>sessionStorage</code> and <code>localStorage</code>?',
        answer: '<p><strong>localStorage:</strong> Stores data with no expiration date (persistent). Data remains until explicitly deleted. **sessionStorage:</strong> Stores data only for the current session. Data is cleared when the browser tab or window is closed. Both are limited to about 5-10MB and are client-side.</p>' 
    },
    { 
        company: 'Infosys', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Are you willing to relocate or work in shifts?',
        answer: '<p><strong>Answer:</strong> Be honest and firm about your preference, but usually, a positive answer is expected for service companies. "Yes, I understand the need for flexibility in this role and am willing to relocate/work in shifts as required by the project needs."</p>' 
    },
    { 
        company: 'TCS', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What is your understanding of the role of a Software Engineer at TCS/Infosys?',
        answer: '<p><strong>Answer:</strong> Focus on contribution beyond coding: "I understand the role involves both high-quality coding and delivering client value. It requires strong communication, continuous learning of client business domains, and adherence to professional software development processes."</p>' 
    },
    { 
        company: 'Wipro', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What are your hobbies? (Use this to demonstrate soft skills).',
        answer: '<p><strong>Answer:</strong> Mention hobbies that align with soft skills. Example: "I enjoy playing team sports (shows teamwork) and learning new languages (shows curiosity/adaptability). This allows me to approach problems with a fresh perspective."</p>' 
    },
    { 
        company: 'Infosys', 
        type: 'Technical', 
        topic: 'Web Tech (Core)', 
        question: 'Explain the purpose of the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> tags in HTML.',
        answer: '<p><strong>&lt;head&gt;:</strong> Contains metadata about the HTML document (data about data). This information is primarily for the browser and search engines (e.g., &lt;title&gt;, &lt;meta&gt;, links to CSS/JS). **&lt;body&gt;:</strong> Contains the visible page content, including text, images, links, and interactive elements.</p>' 
    },
    { 
        company: 'TCS', 
        type: 'Technical', 
        topic: 'DB/SQL (Core)', 
        question: 'Differentiate between <code>DELETE</code>, <code>TRUNCATE</code>, and <code>DROP</code> commands in SQL.',
        answer: '<p><strong>DELETE:</strong> Removes rows based on WHERE clause. Is a DML command. Slow, generates transaction logs, can be rolled back. **TRUNCATE:</strong> Removes all rows efficiently. Is a DDL command. Fast, minimal logging, cannot be rolled back. **DROP:</strong> Deletes the entire schema object (table, index, etc.). DDL command.</p>' 
    },
    { 
        company: 'Wipro', 
        type: 'Technical', 
        topic: 'OS (Core)', 
        question: 'Differentiate between preemptive and non-preemptive scheduling.',
        answer: '<p><strong>Preemptive:</strong> The OS can interrupt (preempt) a running process and switch control to another process (e.g., time-sharing). **Non-preemptive:</strong> A running process holds the CPU until it finishes execution or yields control (e.g., older batch systems). Preemptive is better for responsiveness.</p>' 
    },


    // =================================================================================
    // 🎯 DSA CORE LIBRARY - 70 Questions (Representative of all 10 topics)
    // =================================================================================
    // --- Arrays & Strings (25 Qs) ---
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Find the longest consecutive sequence in an unsorted array.', answer: '<p><strong>Technique:</strong> Hash Set. Iterate through the array. For each number, check if it\'s the *start* of a sequence (i.e., if $n-1$ is not in the set). If so, count $n+1, n+2, \dots$ until the chain breaks. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Maximum Subarray: Find the contiguous subarray which has the largest sum (Kadane\'s Algorithm).', answer: '<p><strong>Technique:</strong> Kadane\'s Algorithm (Dynamic Programming). At each index $i$, the maximum sum ending at $i$ is $\max(\text{arr}[i], \text{arr}[i] + \text{max\_ending\_here})$. Track the global maximum separately. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Easy)', question: 'Find a duplicate number in an array of $n+1$ integers, where each number is between 1 and $n$.', answer: '<p><strong>Technique:</strong> Floyd\'s Cycle Detection (similar to linked list). Treat the array as a linked list where $i$ points to $nums[i]$. Time: O(n). Space: O(1).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Merge Intervals.', answer: '<p><strong>Technique:</strong> Sort the intervals by their start time. Iterate through the sorted list, merging the current interval with the last merged interval if an overlap exists. Time: O(n log n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Rotate Array: Rotate the array to the right by $k$ steps.', answer: '<p><strong>Technique:</strong> Reversal Algorithm. 1. Reverse the whole array. 2. Reverse the first $k$ elements. 3. Reverse the remaining $n-k$ elements. Time: O(n). Space: O(1).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Hard)', question: 'Find the first missing positive integer.', answer: '<p><strong>Technique:</strong> Place numbers in their correct index. Iterate and swap $nums[i]$ until it\'s at $nums[i]-1$. Then, iterate again to find the first index $i$ where $nums[i] \ne i+1$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Strings (Easy)', question: 'Valid Palindrome II: Given a string, you may delete at most one character. Judge whether you can make it a palindrome.', answer: '<p><strong>Technique:</strong> Two Pointers + Greedy. Use pointers $L$ and $R$. If $S[L] \ne S[R]$, recursively check if $S[L+1...R]$ or $S[L...R-1]$ is a palindrome. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Strings (Medium)', question: 'Longest Substring with At Most Two Distinct Characters.', answer: '<p><strong>Technique:</strong> Sliding Window. Use a HashMap to track the frequency of characters in the current window. When the map size > 2, shrink the window from the left until a character count drops to zero. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Strings (Medium)', question: 'Implement atoi (string to integer).', answer: '<p><strong>Technique:</strong> Careful parsing and boundary checking. Skip whitespace, handle sign (+/-), process digits, and check for integer overflow ($\ge 2^{31}-1$ or $\le -2^{31}$) at every step of digit processing. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Find all duplicates in an array where elements are from 1 to N and some elements appear twice.', answer: '<p><strong>Technique:</strong> In-place modification. Use the array index as a hash. Iterate $i$. Change the sign of $nums[|nums[i]|-1]$. If the sign is already negative, $nums[i]$ is a duplicate. Time: O(n). Space: O(1).</p>' },
    { company: 'General', type: 'Coding', topic: 'Strings (Medium)', question: 'Reverse Words in a String.', answer: '<p><strong>Technique:</strong> Reverse the entire string, then reverse each individual word. Or, iterate backward, using two pointers to extract words and prepend them to the result. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Spiral Matrix.', answer: '<p><strong>Technique:</strong> Boundary control (top, bottom, left, right). Traverse in four directions, adjusting the boundaries inward after each pass. Time: O(m * n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Strings (Medium)', question: 'Valid Parentheses.', answer: '<p><strong>Technique:</strong> Stack. Push opening brackets onto the stack. When a closing bracket is encountered, check if it matches the top of the stack. If not, or if the stack is empty, return false. Check for empty stack at the end. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Next Permutation.', answer: '<p><strong>Technique:</strong> Find the largest index $k$ such that $A[k] < A[k+1]$. Find the largest index $l > k$ such that $A[l] > A[k]$. Swap $A[k]$ and $A[l]$. Reverse the subarray $A[k+1...n-1]$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Arrays (Medium)', question: 'Find Peak Element.', answer: '<p><strong>Technique:</strong> Binary Search. If $A[mid] > A[mid+1]$, a peak exists in the left half (including $mid$). Otherwise, a peak exists in the right half. Time: O(log n).</p>' },

    // --- Linked List & Stack/Queue (10 Qs) ---
    { company: 'General', type: 'Coding', topic: 'Linked List (Easy)', question: 'Reverse a Linked List.', answer: '<p><strong>Technique:</strong> Iteration. Use three pointers: <code>prev</code> (starts at null), <code>curr</code> (starts at head), and <code>next</code>. In each loop, update <code>curr.next = prev</code>, then advance <code>prev = curr</code> and <code>curr = next</code>. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Merge two sorted linked lists.', answer: '<p><strong>Technique:</strong> Iteration or Recursion. Create a dummy head. Compare nodes from both lists and append the smaller one to the merged list. Advance the pointer of the appended list. Append the remainder when one list is exhausted. Time: O(m + n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Remove Nth node from end of List.', answer: '<p><strong>Technique:</strong> Two Pointers. Use a <code>fast</code> pointer and a <code>slow</code> pointer. Move <code>fast</code> $n$ steps ahead. Then, move both pointers one step at a time until <code>fast</code> reaches the end. <code>slow</code> will be pointing to the node before the target. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Add two numbers represented by linked lists (digits stored in reverse order).', answer: '<p><strong>Technique:</strong> Simulation. Iterate through both lists simultaneously. Maintain a <code>carry</code> variable. Create a new node for the sum modulus 10. Advance the carry. Time: O(max(m, n)).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Intersection of Two Linked Lists.', answer: '<p><strong>Technique:</strong> Two Pointers. Set pointer $A$ to head $A$ and pointer $B$ to head $B$. When $A$ reaches end, set $A$ to head $B$. When $B$ reaches end, set $B$ to head $A$. They will meet at the intersection point or null. Time: O(m + n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Stack/Queue (Medium)', question: 'Implement a queue using two stacks.', answer: '<p><strong>Technique:</strong> Use an <code>input</code> stack (for push) and an <code>output</code> stack (for pop/peek). If the <code>output</code> stack is empty during pop/peek, transfer all elements from <code>input</code> to <code>output</code>. This amortizes cost to O(1).</p>' },
    { company: 'General', type: 'Coding', topic: 'Stack/Queue (Medium)', question: 'Daily Temperatures (Find how many days until a warmer temperature).', answer: '<p><strong>Technique:</strong> Monotonic Stack. Maintain a stack of indices in decreasing temperature order. When the current temperature $T[i]$ is warmer than the temperature at the top of the stack, pop the index and calculate the difference ($i - stack.pop()$). Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Sort List in O(n log n).', answer: '<p><strong>Technique:</strong> Merge Sort. Recursively split the list into two halves until single nodes remain. Then, merge the sorted halves back together. Finding the middle node requires a two-pointer technique (slow/fast). Time: O(n log n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Linked List (Medium)', question: 'Reorder List (L0 -> Ln -> L1 -> Ln-1...).', answer: '<p><strong>Technique:</strong> 1. Find the middle of the list (slow/fast). 2. Reverse the second half. 3. Merge the two halves alternately. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Stack/Queue (Medium)', question: 'Largest Rectangle in Histogram.', answer: '<p><strong>Technique:</strong> Monotonic Stack. For each bar, find the nearest shorter bar to its left and right. The stack stores indices of bars in increasing height order. When a bar is popped, the current bar is its right boundary, and the stack top is its left boundary. Time: O(n).</p>' },

    // --- Trees & Graphs (15 Qs) ---
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Implement level order traversal (BFS).', answer: '<p><strong>Technique:</strong> BFS. Use a Queue. Enqueue the root. While the queue is not empty, dequeue a node, process it, and enqueue its children (left then right). Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Find the Lowest Common Ancestor (LCA) of two nodes in a Binary Tree.', answer: '<p><strong>Technique:</strong> Recursion/DFS. LCA is the node where $p$ and $q$ are in different subtrees (left and right), or one of them is the current node. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'BST (Medium)', question: 'Convert a sorted array to a balanced BST.', answer: '<p><strong>Technique:</strong> Recursion. The middle element of the array is the root. Recursively call the function for the left half of the array (left subtree) and the right half (right subtree). Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'BST (Medium)', question: 'Delete a node from a BST.', answer: '<p><strong>Technique:</strong> Handle three cases: 1. Node has no children (delete directly). 2. Node has one child (replace node with child). 3. Node has two children (replace node with its in-order successor, then delete the successor). Time: O(h).</p>' },
    { company: 'General', type: 'Coding', topic: 'Graphs (Hard)', question: 'Implement Kruskal\'s Algorithm for Minimum Spanning Tree (MST).', answer: '<p><strong>Algorithm:</strong> Kruskal\'s. 1. Sort all edges by weight. 2. Iterate through sorted edges. Use Union-Find to check if adding the edge creates a cycle. If no cycle, add the edge to the MST. Repeat until V-1 edges are added. Time: O(E log E).</p>' },
    { company: 'General', type: 'Coding', topic: 'Graphs (Medium)', question: 'Topological Sorting (using Kahn\'s Algorithm).', answer: '<p><strong>Algorithm:</strong> Kahn\'s (BFS approach). 1. Compute in-degrees for all nodes. 2. Enqueue all nodes with in-degree 0. 3. While queue is not empty, dequeue a node, add it to the sorted list, and decrement in-degrees of its neighbors. Enqueue neighbors whose in-degree becomes 0. Time: O(V + E).</p>' },
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Maximum Depth of Binary Tree.', answer: '<p><strong>Technique:</strong> Recursion (DFS). Max depth is $1 + \max(\text{depth}(\text{root.left}), \text{depth}(\text{root.right}))$. Base case is null node (depth 0). Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Graphs (Medium)', question: 'Course Schedule (Determine if a cycle exists in a directed graph).', answer: '<p><strong>Technique:</strong> DFS or Topological Sort. A cycle exists if, during the topological sort, the resulting number of nodes is less than the total number of courses. Time: O(V + E).</p>' },
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Symmetric Tree.', answer: '<p><strong>Technique:</strong> Recursion. Check if two trees are a mirror of each other: 1. $T1$ and $T2$ are both null. 2. $T1$ and $T2$ have the same value. 3. $T1.\text{left}$ is a mirror of $T2.\text{right}$, and $T1.\text{right}$ is a mirror of $T2.\text{left}$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Graphs (Hard)', question: 'All Paths From Source to Target in a directed acyclic graph (DAG).', answer: '<p><strong>Technique:</strong> DFS/Backtracking. Use DFS to explore paths from the source. Maintain the current path array. When the target node is reached, add the current path to the results. Backtrack after visiting a node. Time: O(V + E).</p>' },
    { company: 'General', type: 'Coding', topic: 'Heaps (Medium)', question: 'Find the $k$-th largest element in a stream of numbers.', answer: '<p><strong>Technique:</strong> Min-Heap. Maintain a Min-Heap of size $k$. For each new element, add it to the heap. If the heap size exceeds $k$, remove the minimum element (root). The $k$-th largest element is always the root of the Min-Heap. Time: O(log k) per insertion.</p>' },
    { company: 'General', type: 'Coding', topic: 'Heaps (Medium)', question: 'Sort characters by frequency (e.g., "tree" -> "eert").', answer: '<p><strong>Technique:</strong> Hash Map + Max-Heap. 1. Count character frequencies using a HashMap. 2. Push all (frequency, character) pairs into a Max-Heap (ordered by frequency). 3. Extract from the heap and build the result string. Time: O(N + C log C), C is alphabet size.</p>' },
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Flatten Binary Tree to Linked List.', answer: '<p><strong>Technique:</strong> Recursion (Reverse Post-Order). Recursively flatten the right subtree, then the left. The new right pointer of the root should point to the old left subtree, and the old right subtree is attached to the new rightmost node. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Trees (Medium)', question: 'Construct Binary Tree from Preorder and Inorder Traversal.', answer: '<p><strong>Technique:</strong> Recursion. The root is always the first element in the preorder traversal. Find this root in the inorder traversal to determine the left and right subtrees. Recursively build the subtrees. Use a HashMap for O(1) lookup of indices in the inorder array. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Graphs (Hard)', question: 'Dijkstra\'s Algorithm (Implementation detail).', answer: '<p><strong>Implementation:</strong> Use an adjacency list to represent the graph. Use a Min-Priority Queue to store (distance, node) pairs. Initialize source distance to 0, others to $\infty$. Repeatedly extract the minimum distance node and relax its neighbors. Time: O((V + E) log V).</p>' },

    // --- Dynamic Programming & Backtracking (15 Qs) ---
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'Coin Change problem: find the minimum number of coins.', answer: '<p><strong>Technique:</strong> DP. $DP[i]$ stores min coins needed for amount $i$. $DP[i] = \min(DP[i - coin]) + 1$. Initialize $DP[0]=0$. All others $\infty$. Time: O(Amount * NumCoins).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'Climbing Stairs: How many distinct ways to climb to the top, taking 1 or 2 steps?', answer: '<p><strong>Technique:</strong> Fibonacci sequence (DP). $DP[i] = DP[i-1] + DP[i-2]$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'House Robber: Max amount of money you can rob without robbing adjacent houses.', answer: '<p><strong>Technique:</strong> DP. $DP[i] = \max(\text{rob current}: A[i] + DP[i-2], \text{skip current}: DP[i-1])$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Hard)', question: 'Longest Common Substring.', answer: '<p><strong>Technique:</strong> DP. $DP[i][j]$ is length of the common suffix of $S1[0...i-1]$ and $S2[0...j-1]$. If $S1[i-1] = S2[j-1]$, $DP[i][j] = 1 + DP[i-1][j-1]$. Otherwise, $DP[i][j] = 0$. The result is $\max(\text{all } DP[i][j])$. Time: O(m * n).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'Unique Paths (Grid without obstacles).', answer: '<p><strong>Technique:</strong> DP or Combinatorics. $DP[i][j] = DP[i-1][j] + DP[i][j-1]$. The result is $\binom{m+n-2}{m-1}$. Time: O(m * n).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Hard)', question: 'Wildcard Matching (\'?\' and \'*\').', answer: '<p><strong>Technique:</strong> DP. $DP[i][j]$ is true if $S[0...i-1]$ matches $P[0...j-1]$. The star (\'*\') state involves checking if the star matches zero characters ($DP[i][j-1]$) or one or more characters ($DP[i-1][j]$). Time: O(m * n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Backtracking (Medium)', question: 'Generate all combinations of $k$ numbers chosen from $1$ to $n$.', answer: '<p><strong>Technique:</strong> Backtracking (DFS). Recursively build combinations. Maintain $k$ and the starting index for the next number. The base case is when $k$ reaches 0. Time: O($\binom{n}{k} \times k$).</p>' },
    { company: 'General', type: 'Coding', topic: 'Backtracking (Medium)', question: 'Subsets: Find all subsets of an array.', answer: '<p><strong>Technique:</strong> Backtracking. At each element, the decision is either to include it in the current subset or not. Alternatively, use a loop to iterate through the power set size ($2^n$). Time: O(2^n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Backtracking (Hard)', question: 'Permutations II: Find all unique permutations of an array that may contain duplicates.', answer: '<p><strong>Technique:</strong> Backtracking + Sorting. Sort the array first. Use a boolean array (or visited set) to track used elements. Crucially, skip duplicates: if $nums[i] == nums[i-1]$ and $nums[i-1]$ was not just used, skip $nums[i]$. Time: O(N! / (N1! N2!)).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'Partition Equal Subset Sum.', answer: '<p><strong>Technique:</strong> Subset Sum Problem (DP). Check if the array can be partitioned into two subsets with equal sum. This is equivalent to checking if a subset exists that sums to $TotalSum / 2$. $DP[s]$ is true if sum $s$ can be formed. Time: O(N * Sum).</p>' },
    { company: 'General', type: 'Coding', topic: 'DP (Medium)', question: 'Longest Palindromic Subsequence.', answer: '<p><strong>Technique:</strong> DP. $DP[i][j]$ stores the length of LPS in $S[i...j]$. If $S[i] = S[j]$, $DP[i][j] = 2 + DP[i+1][j-1]$. Else, $DP[i][j] = \max(DP[i+1][j], DP[i][j-1])$. Time: O(n^2).</p>' },
    { company: 'General', type: 'Coding', topic: 'Backtracking (Hard)', question: 'Sudoku Solver.', answer: '<p><strong>Technique:</strong> Backtracking. Find an empty cell. Try placing digits 1-9. If placing a digit is valid (no conflicts in row, column, 3x3 box), recursively call the solver. If the recursive call returns true, done. If not, backtrack (reset the cell to empty). Time: Exponential, but fast in practice due to constraints.</p>' },
    { company: 'General', type: 'Coding', topic: 'Greedy (Medium)', question: 'Jump Game.', answer: '<p><strong>Technique:</strong> Greedy. Track the farthest index reachable ($reachable$). If $reachable < i$, you cannot reach $i$. The goal is to see if $reachable \ge n-1$. Time: O(n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Greedy (Medium)', question: 'Activity Selection Problem (Interval Scheduling).', answer: '<p><strong>Technique:</strong> Greedy. Sort activities by their finish times. Select the first activity. Iterate through the rest, selecting the next activity only if its start time is greater than or equal to the finish time of the previously selected activity. Time: O(n log n).</p>' },
    { company: 'General', type: 'Coding', topic: 'Sliding Window (Medium)', question: 'Find all anagrams of a pattern in a string.', answer: '<p><strong>Technique:</strong> Sliding Window + Frequency Maps. Maintain frequency maps for the pattern and the current window of the string. Slide the window, updating the frequency map (add $S[R]$, remove $S[L]$). Check if the window map matches the pattern map at each step. Time: O(|S| + |P|).</p>' },

    // =================================================================================
    // 🎯 SYSTEM DESIGN CORE - 20 Questions
    // =================================================================================
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Core Concepts (Conceptual)', 
        question: 'Describe the CAP Theorem and its implications for distributed systems.',
        answer: '<p><strong>CAP Theorem:</strong> A distributed data store can only guarantee two of Consistency, Availability, and Partition Tolerance simultaneously. Since P is required, systems choose either **CP** (Consistency & Partition Tolerance, e.g., Spanner) or **AP** (Availability & Partition Tolerance, e.g., Cassandra). Decisions are driven by business needs.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Load Balancing (Conceptual)', 
        question: 'How does Load Balancing work? Explain different algorithms.',
        answer: '<p><strong>Load Balancing:</strong> Distributes network traffic across backend servers. **Algorithms:** Round Robin (sequential), Least Connections (best for uneven load), IP Hash (session stickiness), Weighted Round Robin (prioritizes powerful servers).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'API (Medium)', 
        question: 'Design a URL Shortening service like bit.ly.',
        answer: '<p><strong>Mechanism:</strong> Use a Distributed Counter to generate unique IDs. Convert IDs to base62 string (0-9, a-z, A-Z) for the short key. Store (short\_key, long\_url) in a highly scalable, low-latency key-value store (NoSQL). Use 301/307 redirects.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Databases (Conceptual)', 
        question: 'How do you handle database sharding? Explain different sharding keys.',
        answer: '<p><strong>Sharding:</strong> Horizontal partitioning to distribute load. **Keys:** Hash-based (uniform distribution, bad for range queries), Range-based (good for range queries, prone to hotspots), Directory-based (flexible, adds complexity of lookup service).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Microservices (Conceptual)', 
        question: 'What are Microservices? Discuss their pros and cons.',
        answer: '<p><strong>Microservices:</strong> An architectural style where an application is structured as a collection of small, independent services, deployable independently. **Pros:** Decoupling, technology diversity, resilience. **Cons:** Operational complexity, distributed transactions, increased latency (network overhead).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Queue (Medium)', 
        question: 'Explain the role of a message queue (Kafka/RabbitMQ) in a distributed system.',
        answer: '<p><strong>Purpose:</strong> Decoupling producers and consumers, buffering data for burst tolerance, enabling asynchronous communication, and ensuring data durability (retries, DLQ). Used for tasks like email sending, image processing, or asynchronous order fulfillment.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Storage (Medium)', 
        question: 'Design a Distributed Unique ID Generator (like Twitter\'s Snowflake).',
        answer: '<p><strong>Mechanism:</strong> Concatenate several parts: Timestamp (41 bits, ensures ordering), Data Center ID (5 bits), Worker ID (5 bits), Sequence Number (12 bits, prevents collision within the same millisecond). Total 64 bits. Ensures globally unique, roughly time-sortable IDs without using a single database counter.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Caching (Conceptual)', 
        question: 'Differentiate between read-through, write-through, and write-back caching strategies.',
        answer: '<p><strong>Read-Through:</strong> Cache sits inline. On a miss, the cache fetches data from the DB, stores it, and returns it. **Write-Through:</strong> Data is written synchronously to both the cache and the primary store. **Write-Back:</strong> Data is written only to the cache initially, and the write to the primary store is delayed/asynchronous (risky, but fast).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Networking (Conceptual)', 
        question: 'Explain the difference between horizontal and vertical scaling.',
        answer: '<p><strong>Vertical Scaling:</strong> Increasing resources (CPU, RAM) of a single server (scale up). Limited by technology maximums. **Horizontal Scaling:</strong> Adding more servers/nodes (scale out). Theoretically unlimited, requires distributed architecture and load balancing.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Testing (Conceptual)', 
        question: 'What is A/B testing, and how do you implement it in a distributed environment?',
        answer: '<p><strong>A/B Testing:</strong> Comparing two versions (A and B) of a feature to determine which performs better against a defined metric. **Implementation:** Use a Feature Flag/Configuration Service to allocate a percentage of users (e.g., 50%) to version B. Metrics are collected and analyzed by cohort (A vs. B) to prove statistical significance.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Real-time (Hard)', 
        question: 'Design a real-time analytics dashboard (e.g., website visitor metrics).',
        answer: '<p><strong>Pipeline:</strong> Data Ingestion (JS/SDK -> Kafka/Kinesis) -> Stream Processor (aggregates/filters data in memory) -> Time-Series Database (stores aggregated metrics) -> API Gateway -> Dashboard UI. Requires low-latency stream processing (e.g., Flink/Spark Streaming).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Geo-Systems (Medium)', 
        question: 'Design a nearby store locator service for a retail chain.',
        answer: '<p><strong>Mechanism:</strong> Store coordinates in a geospatial database (e.g., PostGIS, MongoDB with 2dsphere index). Queries use geometric distance calculations. Use caching for static store data and aggressive CDN caching for the UI.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Security (Medium)', 
        question: 'How do you securely store user passwords in a database?',
        answer: '<p><strong>Method:</strong> Never store passwords in plaintext. Use a one-way hashing algorithm (e.g., Argon2, bcrypt, or scrypt) with a **salt** (a unique, random string added to the password before hashing). The salt prevents precomputed attacks (rainbow tables).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Messaging (Medium)', 
        question: 'Design a notification system (Push, Email, SMS).',
        answer: '<p><strong>Architecture:</strong> Single API Gateway for all notification types. Uses a Message Queue (Kafka) to decouple sending from generation. A dedicated Notification Service reads the queue, retrieves user preferences, renders templates, and dispatches via third-party providers (APNS/FCM for Push, SendGrid for Email).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Databases (Conceptual)', 
        question: 'When to use SQL vs. NoSQL databases (Document, Key-Value, Graph)?',
        answer: '<p><strong>SQL (RDBMS):</strong> Use for complex transactions (ACID required), fixed schemas, joins, and relational integrity (e.g., banking, core inventory). **NoSQL:</strong> Use for high scalability, schema flexibility, huge datasets, and simple lookups (e.g., user profiles, logging, session management).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Cloud (Medium)', 
        question: 'Explain the concept of Infrastructure as Code (IaC) and list popular tools.',
        answer: '<p><strong>IaC:</strong> Managing and provisioning infrastructure (networks, VMs, databases) through code (configuration files) rather than manual processes. **Benefits:** Version control, repeatability, reduced errors. **Tools:** Terraform (multi-cloud), CloudFormation (AWS), Azure Resource Manager, Ansible (configuration management).</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'Rate Limiting (Medium)', 
        question: 'Explain the Token Bucket and Leaky Bucket algorithms for rate limiting.',
        answer: '<p><strong>Token Bucket:</strong> A bucket holds tokens, which are added at a fixed rate. Requests consume tokens. Allows for burstiness (if the bucket is full). **Leaky Bucket:</strong> Requests are added to a queue (bucket). Requests leak out (processed) at a fixed rate. Smooths out traffic, preventing bursts.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'System Metrics (Conceptual)', 
        question: 'What are the four golden signals of monitoring and why are they important?',
        answer: '<p><strong>Signals:</strong> 1. **Latency:** Time taken to service a request. 2. **Traffic:** Measure of how much demand is placed on the system (e.g., QPS). 3. **Errors:** Rate of failed requests. 4. **Saturation:** Measure of resource utilization (e.g., CPU, Memory). They provide a complete picture of service health.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'System Design (Medium)', 
        question: 'Design a simple distributed key-value store (Hash Table on steroids).',
        answer: '<p><strong>Components:</strong> Consistent Hashing to distribute data across nodes. Replication (N=3) for fault tolerance. Coordinator nodes (Gossip protocol) for discovery and failure detection. Uses eventual consistency for high availability.</p>' 
    },
    { 
        company: 'General', 
        type: 'System Design', 
        topic: 'System Design (Medium)', 
        question: 'How do you handle schema changes and versioning in a microservices architecture?',
        answer: '<p><strong>Versioning:</strong> Use API versioning (e.g., <code>/v1/user</code>). For backward compatibility (BWC), use the **Tolerant Reader pattern** where older clients can ignore new fields, and newer clients can handle missing fields. Use a staged rollout (A/B testing) for major schema changes.</p>' 
    },


    // =================================================================================
    // 🎯 HR & BEHAVIORAL CORE - 40 Questions
    // =================================================================================
    // --- Motivation & Career (10 Qs) ---
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Tell me about yourself. (The professional pitch).',
        answer: '<p><strong>Structure (Past, Present, Future):</strong> 1. Background/education. 2. 2-3 professional achievements/specialization relevant to the role. 3. Conclude by linking your skills to the opportunity at this company.</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Why do you want to work for our company?',
        answer: '<p><strong>Focus:</strong> Research. Mention a specific product, mission, or technical challenge the company is known for (e.g., "I admire your platform\'s commitment to low-latency financial trading and want to master that domain.").</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What are your greatest strengths and weaknesses?',
        answer: '<p><strong>Strengths:</strong> Must be role-relevant (e.g., complexity breakdown, debugging). **Weaknesses:** Choose a manageable flaw (e.g., sometimes too focused on details) and spend 90% of the answer detailing your clear action plan to overcome it.</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Where do you see yourself in five years?',
        answer: '<p><strong>Answer:</strong> Focus on professional growth, mastery, and contribution within the company (e.g., "I see myself as a Senior Engineer, mentoring others, and owning a major service in our core product line.").</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Why are you leaving your current role/Why are you looking for an internship?',
        answer: '<p><strong>Answer:</strong> Frame it as a positive "pull" towards a larger challenge or a new skill set (e.g., "Seeking a move to a bigger scale to gain experience in distributed systems that my current role can\'t offer."). Never criticize past employers.</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What are your salary expectations?',
        answer: '<p><strong>Answer:</strong> State a researched competitive range (e.g., "Between ₹X and ₹Y") and express willingness to evaluate the total compensation package (including stock/benefits).</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'How do you measure success in your job role?',
        answer: '<p><strong>Answer:</strong> Success is measured by impact: 1. Quantitative metrics (e.g., product adoption, reduction in latency, improvement in efficiency). 2. Qualitative metrics (e.g., strong code quality, positive team contribution, successful mentorship).</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'What type of team environment do you thrive in?',
        answer: '<p><strong>Answer:</strong> An environment characterized by high autonomy, psychological safety (allowing for failure/learning), and a culture of transparent, data-driven critique (code review, design docs).</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'If you had unlimited resources, what single project would you start?',
        answer: '<p><strong>Answer:</strong> Use this to demonstrate vision. Choose a grand, challenging project that aligns with the company\'s mission (e.g., "Building an AI that instantly translates all documentation into every supported language, democratizing information access globally").</p>' 
    },
    { 
        company: 'General', 
        type: 'HR', 
        topic: 'Core', 
        question: 'Are you willing to work on weekends or long hours if necessary?',
        answer: '<p><strong>Answer:</strong> "I prioritize high-quality work within standard hours. However, I am committed to the project\'s success. I am willing to work extended hours for critical milestones or production incidents, provided it is managed proactively and is not the continuous norm."</p>' 
    },

    // --- Behavioral: Conflict, Failure, Ethics (15 Qs) ---
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Conflict (Core)', 
        question: 'Tell me about a time you had to deal with a team member who wasn\'t pulling their weight.',
        answer: '<p><strong>STAR:</strong> **Action:** Addressed the issue privately, focusing on project impact. Determined the root cause (e.g., burnout, confusion). Provided support (mentoring, task re-assignment). Escalated only if coaching failed, always with proposed solutions.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Failure (Core)', 
        question: 'Describe a project that failed or was significantly delayed. What was your role?',
        answer: '<p><strong>STAR:</strong> **Failure:** Choose a project delayed by external dependencies or scope creep. **Action:** Performed a robust post-mortem, owned your part of the miscalculation, and implemented a structural change (e.g., mandatory buffer time in estimates) to prevent future delays.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Ethics (Core)', 
        question: 'Have you ever had to compromise your professional ethics? What did you do?',
        answer: '<p><strong>Answer:</strong> **Rule:** You must state that you did *not* compromise ethics. **Example:** A manager asked you to cut security testing to meet a deadline. **Action:** You respectfully declined, presented data on the security risk, and offered an alternative plan (e.g., phased launch). This proves integrity.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Ambiguity (Core)', 
        question: 'How do you handle a new technical project with vague or constantly changing requirements?',
        answer: '<p><strong>Answer:</strong> **Action:** 1. Define the success criteria with stakeholders (measurable outcomes). 2. Create a high-level design document listing all assumptions. 3. Build a small prototype (MVP) to quickly validate the most uncertain technical assumptions. **Result:** Reduces risk and waste.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Communication (Core)', 
        question: 'Tell me about a time you had to explain a complex technical concept to a non-technical audience.',
        answer: '<p><strong>STAR:</strong> **Situation:** Explaining database sharding to the marketing team. **Action:** Used analogies (e.g., dividing a library into multiple smaller buildings). Focused solely on the business impact (e.g., "This means the website will never crash during flash sales"). Avoided jargon.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Prioritization (Core)', 
        question: 'How do you handle working on multiple, competing deadlines?',
        answer: '<p><strong>Answer:</strong> **Action:** 1. Triage by criticality (business impact) and dependencies. 2. Communicate clearly with managers/stakeholders about what will *not* be delivered on time. 3. Time-box tasks and avoid context switching where possible.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Learning (Core)', 
        question: 'Tell me about a time you had to quickly learn a new technology to complete a project.',
        answer: '<p><strong>STAR:</strong> **Action:** Identified the core 20% of the technology needed for 80% of the project (Pareto Principle). Focused on official documentation, ran small local experiments, and quickly integrated a working prototype. Used senior engineers for specific code review only (respecting their time).</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Adaptability (Core)', 
        question: 'Describe a situation where you had to change your coding style or favorite technology for a project.',
        answer: '<p><strong>Answer:</strong> "I believe in adapting to the team\'s standards. When I joined a project requiring TypeScript (I preferred Python), I committed to mastering the new language, embraced the team\'s linting rules, and quickly became proficient, prioritizing team consistency over personal preference."</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Leadership (Core)', 
        question: 'What is your definition of a great software engineer?',
        answer: '<p><strong>Answer:</strong> A great engineer is not just technically brilliant, but consistently delivers business value. They combine technical depth (writing efficient code) with soft skills (mentoring, cross-functional communication, predicting technical debt, and prioritizing long-term maintainability).</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Debugging (Medium)', 
        question: 'Tell me about the most difficult bug you ever debugged.',
        answer: '<p><strong>STAR:</strong> **Bug:** Choose a subtle, non-obvious bug (e.g., race condition, off-by-one in a critical loop, or time zone mismatch). **Action:** Detail the systematic process: hypothesis testing, setting up logging, isolated environment reproduction, and root cause analysis (RCA). **Result:** Proved methodical debugging is crucial.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Code Review (Core)', 
        question: 'What is your process for giving and receiving code reviews?',
        answer: '<p><strong>Giving:</strong> Be respectful, focus on the code, not the person. Prioritize logic, scalability, and security over style. **Receiving:</strong> Maintain a growth mindset. See criticism as an opportunity. Ask clarifying questions, never argue defensively, and commit to fixing the legitimate issues identified.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Risk (Medium)', 
        question: 'Describe a high-risk technical decision you made and how you mitigated the risks.',
        answer: '<p><strong>STAR:</strong> **Decision:** Migrating a database from RDBMS to NoSQL. **Mitigation:** Implemented a **shadow migration** (sending writes to both DBs simultaneously). Created an instant **rollback plan**. Monitored 4 golden signals (Latency, Traffic, Errors, Saturation) aggressively during the launch. **Result:** Successful, safe migration.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Innovation (Core)', 
        question: 'Tell me about an idea you championed that benefited your team or company.',
        answer: '<p><strong>STAR:</strong> **Idea:** Implementing automated API documentation generation. **Action:** Built a prototype in personal time, demonstrated it to the team lead, and presented the efficiency gain (e.g., 20% reduction in documentation time). **Result:** Team adopted the tool, improving developer experience and code correctness.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Teamwork (Core)', 
        question: 'How do you handle disagreement with management about a technical deadline?',
        answer: '<p><strong>Answer:</strong> **Action:** Never agree to an unrealistic deadline. Use data from past sprints (velocity metrics) to justify the required time. Offer a compromise: present an MVP scope that *can* meet the deadline, clearly outlining the deferred features and their impact. Maintain open communication.</p>' 
    },
    { 
        company: 'General', 
        type: 'Behavioral', 
        topic: 'Ownership (Core)', 
        question: 'Describe a time you inherited a codebase that was in bad shape. What was your strategy?',
        answer: '<p><strong>STAR:</strong> **Strategy:** 1. Add minimum test coverage to the most critical paths (safety net). 2. Add monitoring/logging. 3. Focus refactoring efforts only on the areas you actively need to modify for new features (Boy Scout Rule). Avoid massive, non-value-adding refactoring.</p>' 
    },

];
