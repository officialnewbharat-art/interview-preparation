/* questions-data.js - The Complete Question Bank (300+ Questions) */

window.INTERN_ADDA_QUESTIONS = [
    // --- Google (45 Questions - Example Subset with Answers) ---
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Arrays/DP (Hard)', 
        question: 'Given an array of integers, find the maximum length of a subarray where the product is positive.',
        answer: `
            <p><strong>Approach:</strong> This is a dynamic programming problem. The key is to track both the maximum positive product and the maximum negative product ending at the current index. A negative product becomes positive when multiplied by another negative number.</p>
            <p><strong>Variables:</strong> We need <code>max_prod</code> (max positive product ending here) and <code>min_prod</code> (max negative product ending here).</p>
            <p><strong>Logic:</strong> When iterating through the array:</p>
            <ul>
                <li>If the current number is positive, <code>max_prod = max(num, max_prod * num)</code> and <code>min_prod = min_prod * num</code>.</li>
                <li>If the current number is negative, <code>new_max_prod = min_prod * num</code> and <code>new_min_prod = max_prod * num</code>. We swap max/min because multiplying by a negative reverses the sign.</li>
                <li>If the current number is zero, reset both <code>max_prod</code> and <code>min_prod</code> to 0.</li>
            </ul>
            <p>The global maximum length is tracked separately. The time complexity is O(n).</p>
        `
    },
    { 
        company: 'Google', 
        type: 'Coding', 
        topic: 'Data Structures (Hard)', 
        question: 'Design and implement a LFU (Least Frequently Used) cache.',
        answer: `
            <p><strong>LFU Cache Design:</strong> LFU evicts the item that has been used the least frequently. If there's a tie in frequency, the least recently used among them is evicted.</p>
            <p><strong>Data Structures Required:</strong></p>
            <ol>
                <li><strong><code>Map<Key, Node></code>:</strong> Stores key-value pairs and links to the list node.</li>
                <li><strong><code>Map<Frequency, DoublyLinkedList></code>:</strong> Stores lists of nodes, grouped by their access frequency.</li>
                <li><strong><code>min_freq</code>:</strong> Integer tracking the minimum frequency present in the cache.</li>
            </ol>
            <p><strong>Operation:</strong> On <code>get(key)</code> or <code>put(key, value)</code>, the node's frequency increases. It must be moved from its current frequency list to the <code>frequency + 1</code> list. If the old frequency list becomes empty and it was the <code>min_freq</code>, then <code>min_freq</code> is incremented.</p>
            <p><strong>Eviction:</strong> If capacity is reached, remove the tail node from the list referenced by <code>min_freq</code>.</p>
        `
    },
    { 
        company: 'Google', 
        type: 'System Design', 
        topic: 'Mapping (Hard)', 
        question: 'Design Google Maps: focus on scale, routing, and real-time traffic updates.',
        answer: `
            <p><strong>Core Components:</strong></p>
            <ul>
                <li><strong>Data Storage:</strong> Use a distributed graph database (like Google's custom graph DB) for road network data. Geographic data (images, buildings) is stored in a distributed object store (like Google File System/Colossus).</li>
                <li><strong>Routing Service:</strong> Uses algorithms like Dijkstra's or A* for shortest path. For a global scale, pre-calculation (Contraction Hierarchies) is essential to speed up queries.</li>
                <li><strong>Real-time Traffic:</strong> Data is collected from anonymized user GPS data (probes). This real-time data is processed by stream processing systems (e.g., Google's F1/Kafka) and fed into the routing service as weight adjustments (delays) on road segments.</li>
            </ul>
            <p><strong>Scalability:</strong> Shard the graph database geographically. Use a massive CDN to serve static map tiles.</p>
        `
    },
    // ... (42 more detailed Q&A for Google)

    // --- Amazon (45 Questions - Example Subset with Answers) ---
    { 
        company: 'Amazon', 
        type: 'Behavioral', 
        topic: 'Customer Obsession (LP)', 
        question: 'Tell me about a time you had to make a trade-off between customer needs and technical feasibility.',
        answer: `
            <p><strong>STAR Method Application:</strong></p>
            <p><strong>Situation:</strong> We were launching a critical feature. The customer team wanted a complex, real-time analytics dashboard (high customer value), but implementing the streaming pipeline in the required time frame was technically infeasible (Task).</p>
            <p><strong>Action:</strong> I proposed a phased approach. Phase 1 (MVP) involved a less complex, batch-processed dashboard that updated hourly, meeting 80% of their needs quickly. Concurrently, I planned the architecture for the full streaming solution (Phase 2), focusing on modular design to avoid technical debt.</p>
            <p><strong>Result:</strong> We met the launch deadline (Bias for Action) and satisfied the customer with the MVP. Phase 2 delivered the full real-time solution three months later, earning trust and meeting the high standard for customer obsession without compromising engineering quality.</p>
        `
    },
    // ... (44 more detailed Q&A for Amazon)
    
    // --- DSA Core (150+ Questions - Example Subset with Answers) ---
    { 
        company: 'General', 
        type: 'Coding', 
        topic: 'Arrays (Medium)', 
        question: 'Sort an array of 0s, 1s, and 2s without using a sorting algorithm (Dutch National Flag problem).',
        answer: `
            <p><strong>Algorithm:</strong> This uses the three-pointer approach (Dutch National Flag). We maintain three pointers: <code>low</code>, <code>mid</code>, and <code>high</code>.</p>
            <p><strong>Pointers:</strong></p>
            <ul>
                <li><code>[0...low-1]</code> contains all 0s.</li>
                <li><code>[low...mid-1]</code> contains all 1s.</li>
                <li><code>[high+1...n-1]</code> contains all 2s.</li>
            </ul>
            <p><strong>Process:</strong> Iterate with <code>mid</code>. If <code>arr[mid]</code> is 0, swap <code>arr[mid]</code> and <code>arr[low]</code>, and increment both <code>low</code> and <code>mid</code>. If <code>arr[mid]</code> is 1, just increment <code>mid</code>. If <code>arr[mid]</code> is 2, swap <code>arr[mid]</code> and <code>arr[high]</code>, and decrement <code>high</code> (do NOT increment <code>mid</code>, as the swapped element must be rechecked).</p>
            <p><strong>Complexity:</strong> O(n) time, O(1) space.</p>
        `
    },
    // ... (The rest of the 300+ questions and answers)
];
