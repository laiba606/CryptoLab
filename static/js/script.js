// ==========================================
// CAESAR CIPHER
// ==========================================

const messageInput = document.getElementById("message");
const shiftInput = document.getElementById("shift");
const resultOutput = document.getElementById("result");

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const clearBtn = document.getElementById("clearBtn");
const caesarStatus = document.getElementById("cipherStatus");


function caesarCipher(text, shift) {
    return text.replace(/[a-z]/gi, function(letter) {
        const base = letter === letter.toUpperCase() ? 65 : 97;
        const position = letter.charCodeAt(0) - base;
        const newPosition = (position + shift + 26) % 26;

        return String.fromCharCode(base + newPosition);
    });
}


function getShift() {
    const value = shiftInput.value.trim();
    const shift = Number(value);

    if (
        value === "" ||
        !Number.isInteger(shift) ||
        shift < 0 ||
        shift > 25
    ) {
        caesarStatus.textContent =
            "Enter a valid shift key from 0 to 25.";
        return null;
    }

    return shift;
}


// Caesar Encryption

if (encryptBtn) {
    encryptBtn.addEventListener("click", function() {

        const message = messageInput.value;
        const shift = getShift();

        if (message.trim() === "") {
            caesarStatus.textContent = "Please enter a message.";
            return;
        }

        if (shift === null) return;

        resultOutput.value = caesarCipher(message, shift);
        caesarStatus.textContent = "Encryption successful!";
    });
}


// Caesar Decryption

if (decryptBtn) {
    decryptBtn.addEventListener("click", function() {

        const encryptedMessage = resultOutput.value.trim() !== ""
            ? resultOutput.value
            : messageInput.value;

        const shift = getShift();

        if (encryptedMessage.trim() === "") {
            caesarStatus.textContent =
                "Enter an encrypted message first.";
            return;
        }

        if (shift === null) return;

        resultOutput.value = caesarCipher(encryptedMessage, -shift);
        caesarStatus.textContent = "Decryption successful!";
    });
}


// Caesar Clear

if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        messageInput.value = "";
        shiftInput.value = 3;
        resultOutput.value = "";
        caesarStatus.textContent = "";
    });
}


// ==========================================
// TOPIC CONTENT
// ==========================================

const topicContent = document.getElementById("topicContent");
const topicButtons = document.querySelectorAll(".topic-btn");
const caesarLab = document.getElementById("caesar-lab");


const topics = {

    // ==========================================
    // TOPIC 01 - CRYPTOGRAPHY FUNDAMENTALS
    // ==========================================

    fundamentals: `
        <p class="small-heading">TOPIC 01</p>
        <h2>Cryptography Fundamentals</h2>
        <p>
            Cryptography is the process of protecting information
            by converting it into a form that unauthorized people
            cannot understand.
        </p>
        <h3>Important Terms</h3>
        <ul>
            <li><strong>Plaintext:</strong> Original readable message.</li>
            <li><strong>Ciphertext:</strong> Encrypted, unreadable message.</li>
            <li><strong>Key:</strong> A value used for encryption or decryption.</li>
            <li><strong>Algorithm:</strong> The method used for encryption or decryption.</li>
            <li><strong>Cryptanalysis:</strong> The study of analyzing or breaking cryptographic protection.</li>
        </ul>
        <h3>Simple Example</h3>
        <p>
            Imagine sending a private message to your friend.
            Cryptography helps protect the message from unauthorized people.
        </p>
    `,


    // ==========================================
    // TOPIC 02 - ENCODING, ENCRYPTION & HASHING
    // ==========================================

encoding: `
    <p class="small-heading">TOPIC 02</p>
    <h2>Encoding, Encryption & Hashing</h2>

    <p>
        These three techniques change information into different forms,
        but they have different purposes.
    </p>

    <h3>1. Encoding</h3>
    <p>
        Encoding changes data into another format so it can be
        stored or transmitted easily. It does not provide security.
    </p>
    <p><strong>Example:</strong> Base64 encoding changes HELLO into SEVMTE8=.</p>

    <h3>2. Encryption</h3>
    <p>
        Encryption protects information by converting readable data
        into ciphertext using a key. The correct key is needed to
        decrypt the information.
    </p>
    <p><strong>Example:</strong> AES is a commonly used encryption algorithm.</p>

    <h3>3. Hashing</h3>
    <p>
        Hashing converts data into a fixed-length value called a hash.
        It is designed to work in one direction, so the original
        message cannot normally be recovered from the hash.
    </p>
    <p><strong>Example:</strong> SHA-256 creates a 256-bit hash value.</p>

    <h3>Difference Between Them</h3>
    <ul>
        <li><strong>Encoding:</strong> Changes the format of data.</li>
        <li><strong>Encryption:</strong> Protects data using a key.</li>
        <li><strong>Hashing:</strong> Creates a one-way digital fingerprint.</li>
    </ul>

    <h3>Important Point</h3>
    <p>
        Base64 is not encryption. Anyone can decode Base64 without
        needing a secret key.
    </p>

    <!-- INTERACTIVE ENCODING AND DECODING DIAGRAM -->

    
<div class="encoding-diagram-section">
    <h3>Interactive Diagram: Base64 Encoding & Decoding</h3>
    <p>Follow each step to understand how Base64 encoding and decoding work.</p>

    <div id="encodingDiagram">

        <div class="encoding-progress">
            <span id="encodingStepNumber">STEP 1 OF 5</span>
            <div class="encoding-progress-track">
                <div id="encodingProgressBar"></div>
            </div>
        </div>

        <div class="encoding-diagram">

            <div class="encoding-node" data-step="0">
                <div class="encoding-node-icon">📝</div>
                <h3>Original Text</h3>
                <p>HELLO</p>
            </div>

            <div class="encoding-arrow" data-arrow="0">
                <span>→</span>
                <small>Input message</small>
            </div>

            <div class="encoding-node" data-step="1">
                <div class="encoding-node-icon">⚙️</div>
                <h3>Base64 Encoder</h3>
                <p>Converts text into Base64</p>
            </div>

            <div class="encoding-arrow" data-arrow="1">
                <span>→</span>
                <small>Encoding</small>
            </div>

            <div class="encoding-node" data-step="2">
                <div class="encoding-node-icon">🔤</div>
                <h3>Encoded Text</h3>
                <p>SEVMTE8=</p>
            </div>

            <div class="encoding-arrow" data-arrow="2">
                <span>→</span>
                <small>Encoded data</small>
            </div>

            <div class="encoding-node" data-step="3">
                <div class="encoding-node-icon">🔄</div>
                <h3>Base64 Decoder</h3>
                <p>Restores original text</p>
            </div>

            <div class="encoding-arrow" data-arrow="3">
                <span>→</span>
                <small>Decoding</small>
            </div>

            <div class="encoding-node" data-step="4">
                <div class="encoding-node-icon">✅</div>
                <h3>Original Text Restored</h3>
                <p>HELLO</p>
            </div>

        </div>

        <div class="encoding-explanation">
            <h3 id="encodingStepTitle">Step 1: Original Text</h3>
            <p id="encodingStepDescription"></p>
        </div>

        <div class="encoding-controls">
            <button type="button" id="encodingPrevBtn" disabled>
                ← Previous
            </button>

            <button type="button" id="encodingNextBtn">
                Next →
            </button>
        </div>

    </div>
</div>

`,

   
    // ==========================================
    // TOPIC 03 - CAESAR CIPHER
    // ==========================================

    caesar: `
        <p class="small-heading">TOPIC 03</p>
        <h2>Caesar Cipher</h2>
        <p>
            Caesar Cipher is one of the simplest and oldest encryption
            techniques. It replaces each letter in a message with another
            letter by shifting it a fixed number of positions in the alphabet.
        </p>
        <h3>1. How Does Caesar Cipher Work?</h3>
        <p>
            Each letter is moved forward in the alphabet according to
            a selected number called the shift key.
        </p>
        <h3>2. Example of Encryption</h3>
        <p>
            Suppose our message is HELLO and the shift key is 3.
            Each letter moves three positions forward.
        </p>
        <ul>
            <li>H becomes K</li>
            <li>E becomes H</li>
            <li>L becomes O</li>
            <li>L becomes O</li>
            <li>O becomes R</li>
        </ul>
        <p><strong>Plaintext:</strong> HELLO</p>
        <p><strong>Shift Key:</strong> 3</p>
        <p><strong>Ciphertext:</strong> KHOOR</p>
        <h3>3. Decryption</h3>
        <p>
            Decryption converts ciphertext back into the original message.
            It shifts each letter backward using the same shift key.
        </p>
        <p><strong>Example:</strong> KHOOR shifted backward by 3 becomes HELLO.</p>
        <h3>4. Important Terms</h3>
        <ul>
            <li><strong>Plaintext:</strong> The original readable message.</li>
            <li><strong>Ciphertext:</strong> The encrypted message.</li>
            <li><strong>Shift Key:</strong> The number of positions each letter moves.</li>
            <li><strong>Encryption:</strong> Shifting letters forward.</li>
            <li><strong>Decryption:</strong> Shifting letters backward.</li>
        </ul>
        <h3>5. Limitations of Caesar Cipher</h3>
        <ul>
            <li>It has only 25 meaningful non-zero shift keys.</li>
            <li>It can be broken using brute-force attacks.</li>
            <li>It is not secure for protecting modern sensitive information.</li>
        </ul>
        <h3>Remember</h3>
        <p>
            Caesar Cipher is useful for learning the basic concept of
            encryption, but it should not be used for real-world security.
        </p>
         <div class="caesar-diagram-section">
            <h3>Interactive Diagram: How Caesar Cipher Works</h3>
            <p>Click Next to follow the encryption and decryption process.</p>

            <div id="caesarDiagram">

                <div class="encoding-progress">
                    <span id="caesarStepNumber">STEP 1 OF 5</span>
                    <div class="encoding-progress-track">
                        <div id="caesarProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node" data-step="0">
                        <div class="encoding-node-icon">📝</div>
                        <h3>Original Text</h3>
                        <p>HELLO</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="0">
                        <span>→</span>
                        <small>Input message</small>
                    </div>

                    <div class="encoding-node" data-step="1">
                        <div class="encoding-node-icon">🔑</div>
                        <h3>Shift Key</h3>
                        <p>+3 positions</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="1">
                        <span>→</span>
                        <small>Encryption</small>
                    </div>

                    <div class="encoding-node" data-step="2">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Encrypted Text</h3>
                        <p>KHOOR</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="2">
                        <span>→</span>
                        <small>Decryption</small>
                    </div>

                    <div class="encoding-node" data-step="3">
                        <div class="encoding-node-icon">🔄</div>
                        <h3>Shift Back</h3>
                        <p>-3 positions</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="3">
                        <span>→</span>
                        <small>Restoration</small>
                    </div>

                    <div class="encoding-node" data-step="4">
                        <div class="encoding-node-icon">✅</div>
                        <h3>Original Text Restored</h3>
                        <p>HELLO</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="caesarStepTitle">Step 1: Original Text</h3>
                    <p id="caesarStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button type="button" id="caesarPrevBtn" disabled>
                        ← Previous
                    </button>

                    <button type="button" id="caesarNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    
    `,


    // ==========================================
    // TOPIC 04 - SYMMETRIC ENCRYPTION
    // ==========================================

    symmetric: `
        <p class="small-heading">TOPIC 04</p>
        <h2>Symmetric Encryption</h2>
        <p>
            Symmetric encryption is a technique in which the same secret
            key is used to encrypt and decrypt information.
        </p>
        
       
        <h3>1. Common Symmetric Encryption Algorithms</h3>
        <ul>
            <li><strong>AES (Advanced Encryption Standard):</strong>
                A modern and widely used symmetric encryption algorithm.</li>
            <li><strong>DES (Data Encryption Standard):</strong>
                An older encryption algorithm that is no longer considered secure.</li>
            <li><strong>3DES (Triple DES):</strong>
                An older algorithm that applies DES operations multiple times.
                It is now considered outdated.</li>
        </ul>
        <h3>2. AES (Advanced Encryption Standard)</h3>
        <p>
            AES is one of the most widely used symmetric encryption
            algorithms. It is designed to protect sensitive information.
        </p>
        <ul>
            <li>It uses a fixed 128-bit data block.</li>
            <li>It supports 128-bit, 192-bit, and 256-bit keys.</li>
            <li>It is used in file encryption and secure communication.</li>
            <li>AES provides strong security when implemented correctly.</li>
        </ul>
        <h3>3. Advantages of Symmetric Encryption</h3>
        <ul>
            <li>It provides fast encryption and decryption.</li>
            <li>It is suitable for protecting large amounts of data.</li>
            <li>It can provide strong security when a secure algorithm is used.</li>
        </ul>
        <h3>4. Disadvantages of Symmetric Encryption</h3>
        <ul>
            <li>The secret key must be shared securely.</li>
            <li>If the key is stolen, encrypted data may be exposed.</li>
            <li>Managing keys for many users can be difficult.</li>
        
        </ul>

        <div class="symmetric-diagram-section">
            <h3>Interactive Diagram: How Symmetric Encryption Works</h3>
            <p>Follow the steps to see how Alice and Bob use the same secret key.</p>

            <div id="symmetricDiagram">

                <div class="encoding-progress">
                    <span id="symmetricStepNumber">STEP 1 OF 5</span>
                    <div class="encoding-progress-track">
                        <div id="symmetricProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node" data-step="0">
                        <div class="encoding-node-icon">👩</div>
                        <h3>Alice</h3>
                        <p>Plaintext: HELLO</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="0">
                        <span>→</span>
                        <small>Secret key</small>
                    </div>

                    <div class="encoding-node" data-step="1">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Encryption</h3>
                        <p>Uses secret key</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="1">
                        <span>→</span>
                        <small>Ciphertext</small>
                    </div>

                    <div class="encoding-node" data-step="2">
                        <div class="encoding-node-icon">📨</div>
                        <h3>Encrypted Message</h3>
                        <p>Unreadable data</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="2">
                        <span>→</span>
                        <small>Same secret key</small>
                    </div>

                    <div class="encoding-node" data-step="3">
                        <div class="encoding-node-icon">🔓</div>
                        <h3>Decryption</h3>
                        <p>Uses same key</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="3">
                        <span>→</span>
                        <small>Original message</small>
                    </div>

                    <div class="encoding-node" data-step="4">
                        <div class="encoding-node-icon">👨</div>
                        <h3>Bob</h3>
                        <p>Plaintext: HELLO</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="symmetricStepTitle">Step 1: Alice Creates a Message</h3>
                    <p id="symmetricStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button type="button" id="symmetricPrevBtn" disabled>
                        ← Previous
                    </button>

                    <button type="button" id="symmetricNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    `,



    // ==========================================
    // TOPIC 05 - ASYMMETRIC ENCRYPTION
    // ==========================================

    asymmetric: `
        <p class="small-heading">TOPIC 05</p>
        <h2>Asymmetric Encryption</h2>
        <p>
            Asymmetric encryption is a cryptographic technique that uses
            two different but mathematically related keys: a public key
            and a private key.
        </p>
        <h3>1. How Does It Work?</h3>
        <ol>
            <li>The receiver creates a pair of keys: a public key and a private key.</li>
            <li>The receiver shares the public key with others.</li>
            <li>The sender uses the receiver's public key to encrypt the message.</li>
            <li>The encrypted message is sent to the receiver.</li>
            <li>The receiver uses their private key to decrypt the message.</li>
            <li>The original readable message is recovered.</li>
        </ol>
        
        <h3>2. Common Asymmetric Algorithms</h3>
        <ul>
            <li><strong>RSA:</strong>
                A widely known asymmetric algorithm used for encryption
                and digital signatures.</li>
            <li><strong>ECC (Elliptic Curve Cryptography):</strong>
                Uses elliptic curve mathematics to provide strong security
                with smaller keys.</li>
        </ul>
        <h3>3. Public Key and Private Key</h3>
        <ul>
            <li><strong>Public Key:</strong>
                Can be shared openly with other people.</li>
            <li><strong>Private Key:</strong>
                Must be kept secret by its owner.</li>
        </ul>
        <h3>4. Advantages of Asymmetric Encryption</h3>
        <ul>
            <li>It does not require sharing a secret decryption key with the sender.</li>
            <li>It supports secure key exchange.</li>
            <li>It can be used to create and verify digital signatures.</li>
        </ul>
        <h3>5. Disadvantages of Asymmetric Encryption</h3>
        <ul>
            <li>It is slower than symmetric encryption.</li>
            <li>It requires more computational resources.</li>
            <li>Public keys must be verified to ensure they belong to the correct person.</li>
        
        </ul>

        <div class="asymmetric-diagram-section">
            <h3>Interactive Diagram: How Asymmetric Encryption Works</h3>
            <p>Follow the steps to understand how Alice uses Bob's public key to send a secure message.</p>

            <div id="asymmetricDiagram">

                <div class="encoding-progress">
                    <span id="asymmetricStepNumber">STEP 1 OF 5</span>
                    <div class="encoding-progress-track">
                        <div id="asymmetricProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node" data-step="0">
                        <div class="encoding-node-icon">👨</div>
                        <h3>Bob</h3>
                        <p>Creates key pair</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="0">
                        <span>→</span>
                        <small>Shares public key</small>
                    </div>

                    <div class="encoding-node" data-step="1">
                        <div class="encoding-node-icon">🔑</div>
                        <h3>Public Key</h3>
                        <p>Shared with Alice</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="1">
                        <span>→</span>
                        <small>Encryption</small>
                    </div>

                    <div class="encoding-node" data-step="2">
                        <div class="encoding-node-icon">👩</div>
                        <h3>Alice</h3>
                        <p>Encrypts HELLO</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="2">
                        <span>→</span>
                        <small>Ciphertext</small>
                    </div>

                    <div class="encoding-node" data-step="3">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Encrypted Message</h3>
                        <p>Unreadable data</p>
                    </div>

                    <div class="encoding-arrow" data-arrow="3">
                        <span>→</span>
                        <small>Private key</small>
                    </div>

                    <div class="encoding-node" data-step="4">
                        <div class="encoding-node-icon">🔓</div>
                        <h3>Bob Decrypts</h3>
                        <p>Recovers HELLO</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="asymmetricStepTitle">Step 1: Bob Creates a Key Pair</h3>
                    <p id="asymmetricStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button type="button" id="asymmetricPrevBtn" disabled>
                        ← Previous
                    </button>

                    <button type="button" id="asymmetricNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    `,


    // ==========================================
    // TOPIC 06 - HYBRID CRYPTOGRAPHY
    // ==========================================

    hybrid: `
        <p class="small-heading">TOPIC 06</p>
        <h2>Hybrid Cryptography</h2>
        <p>
            Hybrid cryptography combines symmetric encryption and
            asymmetric encryption to provide both security and efficiency.
        </p>
        <h3>1. What is Hybrid Cryptography?</h3>
        <p>Hybrid cryptography uses two encryption techniques together:</p>
        <ul>
            <li><strong>Symmetric Encryption:</strong>
                Uses the same secret key for encryption and decryption.</li>
            <li><strong>Asymmetric Encryption:</strong>
                Uses a public key and a private key.</li>
        </ul>
        <p>
            Instead of encrypting the entire message with asymmetric
            encryption, hybrid cryptography uses symmetric encryption
            for the message and asymmetric encryption to protect the
            secret key.
        </p>
        <h3>2. How Does It Work?</h3>
        <ol>
            <li>The sender generates a random secret key.</li>
            <li>The sender encrypts the message using symmetric encryption, such as AES.</li>
            <li>The sender encrypts the secret key using the receiver's public key.</li>
            <li>The sender sends the encrypted message and encrypted secret key to the receiver.</li>
            <li>The receiver uses their private key to recover the secret key.</li>
            <li>The receiver uses the recovered secret key to decrypt the original message.</li>
        </ol>
        
        <h3>3. Advantages of Hybrid Cryptography</h3>
        <ul>
            <li>Combines the benefits of symmetric and asymmetric encryption.</li>
            <li>Encrypts large amounts of data efficiently.</li>
            <li>Protects the secret key using asymmetric encryption.</li>
            <li>Supports secure communication.</li>
        </ul>
        <h3>4. Where Is It Used?</h3>
        <ul>
            <li>HTTPS and TLS secure connections.</li>
            <li>Secure email communication.</li>
            <li>VPN connections.</li>
            <li>Secure file sharing.</li>
        </ul>
                <!-- Interactive Hybrid Encryption Diagram -->
        <div class="hybrid-diagram-section">

            <h3>Interactive Diagram: How Hybrid Encryption Works</h3>

            <p>
                Follow the steps to understand how Alice combines AES
                and RSA to securely send a message to Bob.
            </p>

            <div id="hybridDiagram">

                <div class="encoding-progress">
                    <span id="hybridStepNumber">STEP 1 OF 5</span>

                    <div class="encoding-progress-track">
                <div id="hybridProgressBar"></div>
            </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node" id="hybridNode0">
                        <div class="encoding-node-icon">👩</div>
                        <h3>Alice</h3>
                        <p>Creates message HELLO</p>
                    </div>

                    <div class="encoding-arrow" id="hybridArrow0">
                        <span>→</span>
                        <small>Generates AES key</small>
                    </div>

                    <div class="encoding-node" id="hybridNode1">
                        <div class="encoding-node-icon">🔑</div>
                        <h3>AES Secret Key</h3>
                        <p>Random session key</p>
                    </div>

                    <div class="encoding-arrow" id="hybridArrow1">
                        <span>→</span>
                        <small>AES + RSA</small>
                    </div>

                    <div class="encoding-node" id="hybridNode2">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Encryption</h3>
                        <p>Message & key encrypted</p>
                    </div>

                    <div class="encoding-arrow" id="hybridArrow2">
                        <span>→</span>
                        <small>Sends both</small>
                    </div>

                    <div class="encoding-node" id="hybridNode3">
                        <div class="encoding-node-icon">📦</div>
                        <h3>Encrypted Package</h3>
                        <p>Ciphertext + encrypted key</p>
                    </div>

                    <div class="encoding-arrow" id="hybridArrow3">
                        <span>→</span>
                        <small>RSA private key + AES</small>
                    </div>

                    <div class="encoding-node" id="hybridNode4">
                        <div class="encoding-node-icon">👨</div>
                        <h3>Bob</h3>
                        <p>Recovers HELLO</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="hybridStepTitle"></h3>
                    <p id="hybridStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button id="hybridPrevBtn" disabled>← Previous</button>
                    <button id="hybridNextBtn">Next Step →</button>
                </div>

            </div>
        </div>
    
    `,


    // ==========================================
    // TOPIC 07 - SHA-256 HASHING
    // ==========================================

    sha256: `
        <p class="small-heading">TOPIC 07</p>
        <h2>SHA-256 Hashing</h2>
        <p>
            SHA-256 is a cryptographic hash function that converts
            input data into a fixed-length hash value of 256 bits.
        </p>
        <h3>1. What is SHA-256?</h3>
        <p>
            SHA-256 stands for Secure Hash Algorithm 256.
            It is part of the SHA-2 family of cryptographic hash functions.
            It takes data of any size and produces a fixed-length hash.
        </p>
        <h3>2. How Does SHA-256 Work?</h3>
        <ol>
            <li>The user provides a message or file.</li>
            <li>SHA-256 processes the input data.</li>
            <li>It generates a 256-bit hash value.</li>
            <li>The hash is normally displayed as 64 hexadecimal characters.</li>
        </ol>
        
        <p>
            The same input always produces the same hash value.
            Even a small change in the input produces a very different hash.
        </p>
        <h3>3. Important Properties of SHA-256</h3>
        <ul>
            <li><strong>Fixed Length:</strong> Always produces a 256-bit hash.</li>
            <li><strong>One-Way:</strong> It is not designed to recover the original message.</li>
            <li><strong>Deterministic:</strong> The same input produces the same hash.</li>
            <li><strong>Avalanche Effect:</strong> A small input change causes a major change in the hash.</li>
            <li><strong>Collision Resistance:</strong> It is designed to make finding two inputs with the same hash extremely difficult.</li>
        </ul>
        <h3>4. Where Is SHA-256 Used?</h3>
        <ul>
            <li>Checking file integrity.</li>
            <li>Digital signatures.</li>
            <li>Blockchain systems.</li>
            <li>Verifying downloaded files.</li>
            <li>Cryptographic applications.</li>
        </ul>
        <h3>5. Advantages of SHA-256</h3>
        <ul>
            <li>Produces a fixed-length hash.</li>
            <li>Provides strong collision resistance for general use.</li>
            <li>Widely supported by modern systems.</li>
            <li>Useful for checking whether data has changed.</li>
        </ul>
        <h3>6. Limitations of SHA-256</h3>
        <ul>
            <li>It cannot decrypt a hash to recover the original message.</li>
            <li>It does not provide encryption.</li>
            <li>It is not suitable by itself for securely storing passwords because attackers can calculate hashes quickly.</li>
        </ul>
        
        <!-- SHA-256 Interactive Diagram -->
        <div class="sha256-diagram-section">

            <h3>Interactive Diagram: How SHA-256 Works</h3>

            <p>
                Follow the steps to understand how SHA-256 converts
                a message into a fixed-length hash.
            </p>

            <div id="sha256Diagram">

                <div class="encoding-progress">
                    <span id="sha256StepNumber">STEP 1 OF 5</span>

                    <div class="encoding-progress-track">
                        <div id="sha256ProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node">
                        <div class="encoding-node-icon">💬</div>
                        <h3>Input Message</h3>
                        <p>Hello</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Input data</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">⚙️</div>
                        <h3>SHA-256</h3>
                        <p>Processes the data</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Hashing</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🔢</div>
                        <h3>Hash Output</h3>
                        <p>256-bit value</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>64 hex characters</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🔒</div>
                        <h3>Final Hash</h3>
                        <p>Fixed-length output</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="sha256StepTitle"></h3>
                    <p id="sha256StepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button id="sha256PrevBtn" disabled>
                        ← Previous
                    </button>

                    <button id="sha256NextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    `,

    // ==========================================
    // TOPIC 08 - PASSWORD SALTING
    // ==========================================

    salting: `
        <p class="small-heading">TOPIC 08</p>
        <h2>Password Salting</h2>
        <p>
            Password salting is a security technique in which a
            unique random value, called a salt, is added to a
            password before it is hashed.
        </p>

        <h3>1. What is Password Salting?</h3>
        <p>
            A salt is a random value generated for each password.
            It is combined with the password before the hashing
            process. This helps protect stored passwords against
            precomputed attacks such as rainbow-table attacks.
        </p>

        <h3>2. Why Do We Need Salting?</h3>
        <p>
            If two users choose the same password, ordinary
            unsalted hashing produces the same hash for both users.
            This can make it easier for attackers to identify
            commonly used passwords.
        </p>
        <p>
            Salting makes the resulting hashes different, even
            when users have chosen the same password.
        </p>

        <h3>3. How Does Password Salting Work?</h3>
        <ol>
            <li>The user creates a password.</li>
            <li>The system generates a unique random salt.</li>
            <li>The salt is combined with the password.</li>
            <li>The password and salt are processed by a password-hashing algorithm.</li>
            <li>The resulting hash and salt are stored in the database.</li>
            <li>During login, the system uses the stored salt to verify the entered password.</li>
        </ol>

       
        <h3>4. Advantages of Password Salting</h3>
        <ul>
            <li>Helps protect against rainbow-table attacks.</li>
            <li>Produces different hashes for identical passwords when different salts are used.</li>
            <li>Makes large-scale password cracking more difficult.</li>
            <li>Improves password storage security when used correctly.</li>
        </ul>

        <h3>5. Important Security Points</h3>
        <ul>
            <li>A salt should be randomly generated and unique for each password.</li>
            <li>A salt does not need to be secret.</li>
            <li>The salt is normally stored alongside the password hash.</li>
            <li>Salting does not encrypt passwords.</li>
            <li>Salting alone does not prevent brute-force attacks.</li>
        </ul>

        <h3>6. Common Password-Hashing Algorithms</h3>
        <ul>
            <li><strong>Argon2id:</strong> A modern recommended password-hashing algorithm.</li>
            <li><strong>bcrypt:</strong> A widely used password-hashing algorithm.</li>
            <li><strong>PBKDF2:</strong> A password-based key derivation function.</li>
        </ul>
       
        <!-- Password Salting Interactive Diagram -->
        <div class="salting-diagram-section">

            <h3>Interactive Diagram: How Password Salting Works</h3>

            <p>
                Follow the steps to understand how a unique salt
                protects stored passwords.
            </p>

            <div id="saltingDiagram">

                <div class="encoding-progress">
                    <span id="saltingStepNumber">STEP 1 OF 5</span>

                    <div class="encoding-progress-track">
                        <div id="saltingProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node">
                        <div class="encoding-node-icon">👤</div>
                        <h3>User Password</h3>
                        <p>Hello123</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Generate salt</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🎲</div>
                        <h3>Random Salt</h3>
                        <p>A7F92</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Combine password + salt</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Password Hashing</h3>
                        <p>Argon2id / bcrypt</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Generate hash</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🗄️</div>
                        <h3>Database</h3>
                        <p>Stores salt + hash</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="saltingStepTitle"></h3>
                    <p id="saltingStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button id="saltingPrevBtn" disabled>
                        ← Previous
                    </button>

                    <button id="saltingNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    `,

    // ==========================================
    // TOPIC 09 - HMAC
    // ==========================================

    hmac: `
        <p class="small-heading">TOPIC 09</p>
        <h2>HMAC (Hash-Based Message Authentication Code)</h2>

        <p>
            HMAC is a security technique that uses a cryptographic
            hash function and a shared secret key to check message
            integrity and authenticity.
        </p>

        <h3>1. What is HMAC?</h3>
        <p>
            HMAC stands for Hash-Based Message Authentication Code.
            It combines a message with a shared secret key and a
            hash function, such as SHA-256, to generate an
            authentication code.
        </p>
        <p>
            The sender and receiver must both know the same
            secret key.
        </p>

        <h3>2. How Does HMAC Work?</h3>
        <ol>
            <li>The sender creates a message.</li>
            <li>The sender uses the message, secret key, and hash function to generate an HMAC.</li>
            <li>The sender sends the message and its HMAC to the receiver.</li>
            <li>The receiver generates a new HMAC using the received message and the same secret key.</li>
            <li>The receiver compares both HMAC values.</li>
            <li>If they match, the message has not been changed and the correct shared key was used.</li>
        </ol>

        <h3>3. Security Properties</h3>
        <ul>
            <li><strong>Integrity:</strong> Helps detect whether a message has been modified.</li>
            <li><strong>Authentication:</strong> Helps verify that the HMAC was generated by someone who knows the shared secret key.</li>
        </ul>

        <h3>4. Difference Between SHA-256 and HMAC-SHA256</h3>
        <div class="example-box">
            <p><strong>SHA-256:</strong> Uses a hash function without a secret key.</p>
            <p><strong>HMAC-SHA256:</strong> Uses SHA-256 together with a shared secret key.</p>
        </div>

        <h3>5. Where Is HMAC Used?</h3>
        <ul>
            <li>API authentication.</li>
            <li>Webhook verification.</li>
            <li>Secure network communication.</li>
            <li>Payment systems.</li>
            <li>Checking message integrity and authenticity.</li>
        </ul>

        <h3>6. Advantages of HMAC</h3>
        <ul>
            <li>Helps detect unauthorized message changes.</li>
            <li>Provides authentication using a shared secret key.</li>
            <li>Can use secure hash functions such as SHA-256.</li>
            <li>Is widely supported in security applications.</li>
        </ul>

        <h3>7. Important Security Points</h3>
        <ul>
            <li>HMAC does not encrypt or hide a message.</li>
            <li>It provides integrity and authentication, not confidentiality.</li>
            <li>The secret key must be kept private.</li>
            <li>Anyone who knows the shared secret key can generate a valid HMAC.</li>
            <li>HMAC-SHA256 is different from a plain SHA-256 hash.</li>
        </ul>

        <!-- HMAC Interactive Diagram -->
        <div class="hmac-diagram-section">

            <h3>Interactive Diagram: How HMAC Works</h3>

            <p>
                Follow the steps to understand how Alice and Bob
                use a shared secret key to verify a message.
            </p>

            <div id="hmacDiagram">

                <div class="encoding-progress">
                    <span id="hmacStepNumber">STEP 1 OF 5</span>

                    <div class="encoding-progress-track">
                        <div id="hmacProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node">
                        <div class="encoding-node-icon">👩</div>
                        <h3>Alice</h3>
                        <p>Creates message</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Message + Secret Key</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🔑</div>
                        <h3>HMAC-SHA256</h3>
                        <p>Generates HMAC</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Sends message + HMAC</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">📩</div>
                        <h3>Bob</h3>
                        <p>Receives message</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Recalculates HMAC</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🛡️</div>
                        <h3>Verification</h3>
                        <p>Compares HMAC values</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="hmacStepTitle"></h3>
                    <p id="hmacStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button id="hmacPrevBtn" disabled>
                        ← Previous
                    </button>

                    <button id="hmacNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>
    `,

   
signature: `
    <section class="content-section">

        <h2>Digital Signature</h2>

        <p>
            A digital signature is used to verify the authenticity and
            integrity of a digital message or document.
        </p>

        <h3>1. How Does It Work?</h3>

        <ul>
            <li><strong>Private Key:</strong> Used to create the digital signature.</li>
            <li><strong>Public Key:</strong> Used to verify the signature.</li>
        </ul>

        <ol>
            <li>The sender creates a message.</li>
            <li>A SHA-256 hash of the message is generated.</li>
            <li>The sender signs the hash using their private key.</li>
            <li>The receiver uses the sender's public key to verify the signature.</li>
            <li>If verification succeeds, the signature is valid for that message.</li>
        </ol>

        

        <h3>2. Advantages</h3>

        <ul>
            <li><strong>Authentication:</strong> Helps verify the signer.</li>
            <li><strong>Integrity:</strong> Detects changes in the message.</li>
            <li><strong>Non-repudiation:</strong> Provides evidence that the message was signed.</li>
        </ul>

        <h3>3. Digital Signature vs. Encryption</h3>

        <div class="comparison-container">

            <div class="comparison-card">
                <h4>Digital Signature</h4>
                <ul>
                    <li>Verifies authenticity and integrity.</li>
                    <li>Uses a private key to sign.</li>
                    <li>Public key verifies the signature.</li>
                    <li>Does not hide the message.</li>
                </ul>
            </div>

            <div class="comparison-card">
                <h4>Encryption</h4>
                <ul>
                    <li>Protects confidentiality.</li>
                    <li>Uses encryption keys.</li>
                    <li>Decryption recovers the message.</li>
                    <li>Keeps information secret.</li>
                </ul>
            </div>

        </div>

        <p>
            <strong>Important:</strong> Keep the private key secret.
            Non-repudiation also depends on trustworthy identification
            of the public key owner.
        </p>

    </section>
    
        <!-- Digital Signature Interactive Diagram -->
        <div class="signature-diagram-section">

            <h3>Interactive Diagram: How Digital Signature Works</h3>

            <p>
                Follow the steps to understand how Alice signs a message
                and how Bob verifies the digital signature.
            </p>

            <div id="signatureDiagram">

                <div class="encoding-progress">
                    <span id="signatureStepNumber">STEP 1 OF 5</span>

                    <div class="encoding-progress-track">
                        <div id="signatureProgressBar"></div>
                    </div>
                </div>

                <div class="encoding-diagram">

                    <div class="encoding-node">
                        <div class="encoding-node-icon">👩</div>
                        <h3>Alice</h3>
                        <p>Creates a message</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Creates message hash</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">#️⃣</div>
                        <h3>Hash</h3>
                        <p>SHA-256 digest</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Signs using private key</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🔐</div>
                        <h3>Digital Signature</h3>
                        <p>Signature created</p>
                    </div>

                    <div class="encoding-arrow">
                        <span>→</span>
                        <small>Sends message + signature</small>
                    </div>

                    <div class="encoding-node">
                        <div class="encoding-node-icon">🛡️</div>
                        <h3>Bob</h3>
                        <p>Verifies signature</p>
                    </div>

                </div>

                <div class="encoding-explanation">
                    <h3 id="signatureStepTitle"></h3>
                    <p id="signatureStepDescription"></p>
                </div>

                <div class="encoding-controls">
                    <button id="signaturePrevBtn" disabled>
                        ← Previous
                    </button>

                    <button id="signatureNextBtn">
                        Next Step →
                    </button>
                </div>

            </div>
        </div>

`,

    pki: `
        <section class="content-section">

            <h2>PKI and Digital Certificates</h2>

            <p>
                Public Key Infrastructure (PKI) is a system used to
                manage public keys and digital certificates. It helps
                establish trust between users, websites, and organizations.
            </p>

            <h3>1. What is a Digital Certificate?</h3>

            <p>
                A digital certificate is an electronic document that
                connects a public key with the identity of a person,
                website, or organization. It is digitally signed by
                a trusted Certificate Authority (CA).
            </p>

            <h3>2. Main Components of PKI</h3>

            <ul>
                <li><strong>Certificate Authority (CA):</strong> Issues and digitally signs certificates.</li>
                <li><strong>Registration Authority (RA):</strong> Verifies the identity of certificate applicants.</li>
                <li><strong>Digital Certificate:</strong> Connects an identity with a public key.</li>
                <li><strong>Public and Private Keys:</strong> Used for cryptographic operations.</li>
                <li><strong>Certificate Revocation:</strong> Allows a certificate to be declared untrusted before its expiry.</li>
            </ul>

           
            

            <h3>5. PKI vs. Digital Certificate</h3>

            <div class="comparison-container">

                <div class="comparison-card">
                    <h4>PKI</h4>
                    <ul>
                        <li>A complete trust management system.</li>
                        <li>Manages certificates and keys.</li>
                        <li>Includes Certificate Authorities.</li>
                    </ul>
                </div>

                <div class="comparison-card">
                    <h4>Digital Certificate</h4>
                    <ul>
                        <li>An electronic document.</li>
                        <li>Connects identity with a public key.</li>
                        <li>Issued and signed by a CA.</li>
                    </ul>
                </div>

            </div>

            <p>
                <strong>Important:</strong> A digital certificate does
                not contain the private key. The private key must remain
                protected by its owner.
            </p>

        </section>
    `,

selection: `
    <div class="quiz-page">
        <h2>Cryptography Quiz</h2>
        <p class="quiz-intro">Test your knowledge of cryptography and see how much you have learned.</p>

        <div class="quiz-card">
            <div class="quiz-top">
                <span id="quizProgress">Question 1 of 10</span>
                <span id="quizScore">Score: 0</span>
            </div>

            <div class="quiz-progress-bar">
                <div id="quizProgressFill"></div>
            </div>

            <h3 id="quizQuestion"></h3>

            <div id="quizOptions" class="quiz-options"></div>

            <div id="quizFeedback" class="quiz-feedback"></div>

            <button id="nextQuizBtn" class="quiz-next-btn" disabled>
                Next Question
            </button>
        </div>

        <div id="quizResult" class="quiz-result" style="display: none;"></div>
    </div>
`,
};

// ==========================================
// CLEAR BUTTON HELPER
// ==========================================

function addClearButton(container, clearFunction, buttonId = null) {

    const practicalBoxes = container.querySelectorAll(".practical-box");

    const targetBox = practicalBoxes.length > 0
        ? practicalBoxes[practicalBoxes.length - 1]
        : container;

    const existingButtons = Array.from(
        container.querySelectorAll("button")
    ).filter(function(button) {
        return (
            button.classList.contains("clear-button") ||
            button.textContent.trim().toLowerCase() === "clear all"
        );
    });

    let clearButton = existingButtons.shift();

    existingButtons.forEach(function(button) {
        button.remove();
    });

    if (!clearButton) {
        clearButton = document.createElement("button");
    }

    clearButton.type = "button";
    clearButton.className = "clear-button";
    clearButton.textContent = "Clear All";

    if (buttonId) {
        clearButton.id = buttonId;
    }

    targetBox.appendChild(clearButton);
    clearButton.onclick = clearFunction;

    return clearButton;
}


// ==========================================
// TOPIC SWITCHING
// ==========================================

topicButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedTopic = button.getAttribute("data-topic");

        if (!topics[selectedTopic]) {
            return;
        }

       topicContent.innerHTML = topics[selectedTopic];

// Initialize Caesar interactive diagram
if (selectedTopic === "caesar") {
    setupCaesarDiagram();
}
// Initialize Symmetric Encryption diagram
if (selectedTopic === "symmetric") {
    setupSymmetricDiagram();
}
// Initialize Asymmetric Encryption diagram
if (selectedTopic === "asymmetric") {
    setupAsymmetricDiagram();
}
// Initialize Hybrid Cryptography diagram
if (selectedTopic === "hybrid") {
    setupHybridDiagram();
}
// Initialize SHA-256 diagram
if (selectedTopic === "sha256") {
    setupSHA256Diagram();
}
// Initialize Password Salting diagram
if (selectedTopic === "salting") {
    setupSaltingDiagram();
}
// Initialize HMAC diagram
if (selectedTopic === "hmac") {
    setupHMACDiagram();
}
// Initialize Digital Signature diagram
if (selectedTopic === "signature") {
    setupSignatureDiagram();
}
// Initialize Quiz
if (selectedTopic === "selection") {
    setupQuiz();
}
if (selectedTopic === "pki") {
    setupPKIInteractive(topicContent);
}

        caesarLab.hidden = selectedTopic !== "caesar";

        topicButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // ======================================
        // TOPIC 02 - ENCODING PRACTICAL
        // ======================================

        if (selectedTopic === "encoding") {

            const practicalTemplate =
                document.getElementById("encodingPractical");

            if (!practicalTemplate) {
                console.error("Encoding practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );
            setupEncodingDiagram();

            setupBase64();
            setupAES();
            setupSHA256();

            addClearButton(topicContent, function() {

                // Base64
                document.getElementById("base64Input").value = "";
                document.getElementById("base64Output").value = "";
                document.getElementById("base64Status").textContent = "";

                // AES
                document.getElementById("aesInput").value = "";
                document.getElementById("aesPassword").value = "";
                document.getElementById("aesOutput").value = "";
                document.getElementById("aesStatus").textContent = "";

                // SHA-256
                document.getElementById("hashInput").value = "";
                document.getElementById("hashOutput").value = "";
                document.getElementById("hashStatus").textContent = "";

            });

        }


        // ======================================
        // TOPIC 04 - SYMMETRIC ENCRYPTION
        // ======================================

        if (selectedTopic === "symmetric") {

            const practicalTemplate =
                document.getElementById("symmetricPractical");

            if (!practicalTemplate) {
                console.error("Symmetric practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupAES();

            addClearButton(topicContent, function() {

                document.getElementById("aesInput").value = "";
                document.getElementById("aesPassword").value = "";
                document.getElementById("aesOutput").value = "";
                document.getElementById("aesStatus").textContent = "";

            });

        }


        // ======================================
        // TOPIC 05 - ASYMMETRIC ENCRYPTION
        // ======================================

        if (selectedTopic === "asymmetric") {

            const practicalTemplate =
                document.getElementById("asymmetricPractical");

            if (!practicalTemplate) {
                console.error("Asymmetric practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupRSA();

        }


        // ======================================
        // TOPIC 06 - HYBRID CRYPTOGRAPHY
        // ======================================

        if (selectedTopic === "hybrid") {

            const practicalTemplate =
                document.getElementById("hybridPractical");

            if (!practicalTemplate) {
                console.error("Hybrid practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupHybrid();

        }


        // ======================================
        // TOPIC 07 - SHA-256 PRACTICAL
        // ======================================

        if (selectedTopic === "sha256") {

            const practicalTemplate =
                document.getElementById("sha256Practical");

            if (!practicalTemplate) {
                console.error("SHA-256 practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupSHA256();

            addClearButton(topicContent, function() {

                // Hash Generator
                document.getElementById("hashInput").value = "";
                document.getElementById("hashOutput").value = "";
                document.getElementById("hashStatus").textContent = "";

                // Avalanche Effect
                document.getElementById("avalancheInput1").value = "";
                document.getElementById("avalancheInput2").value = "";
                document.getElementById("avalancheHash1").value = "";
                document.getElementById("avalancheHash2").value = "";
                document.getElementById("avalancheStatus").textContent = "";

                // Hash Verification
                document.getElementById("verifyInput1").value = "";
                document.getElementById("verifyInput2").value = "";
                document.getElementById("verifyStatus").textContent = "";

            });

        }


        // ======================================
        // TOPIC 08 - PASSWORD SALTING PRACTICAL
        // ======================================

        if (selectedTopic === "salting") {

            const practicalTemplate =
                document.getElementById("saltingPractical");

            if (!practicalTemplate) {
                console.error("Password Salting practical template was not found.");
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupSalting();

        }


        // ======================================
        // TOPIC 09 - HMAC PRACTICAL
        // ======================================

        if (selectedTopic === "hmac") {

            const practicalTemplate =
                document.getElementById("hmacPractical");

            if (!practicalTemplate) {
                console.error("HMAC practical template was not found. Add <template id=\"hmacPractical\"> to index.html.");
                topicContent.innerHTML +=
                    '<p class="error-message">HMAC practical template was not found. Please add the hmacPractical template in index.html.</p>';
                return;
            }

            topicContent.appendChild(
                practicalTemplate.content.cloneNode(true)
            );

            setupHMAC();

        }
        // TOPIC 11 - PKI PRACTICAL

if (selectedTopic === "pki") {

    const practicalTemplate =
        document.getElementById("pkiPractical");

    if (!practicalTemplate) {
        console.error("PKI practical template was not found.");
        return;
    }

    topicContent.appendChild(
        practicalTemplate.content.cloneNode(true)
    );

    setupPKI();

}


// ======================================
// TOPIC 10 - DIGITAL SIGNATURE PRACTICAL
// ======================================

if (selectedTopic === "signature") {

    const practicalTemplate =
        document.getElementById("signaturePractical");

    if (!practicalTemplate) {
        console.error("Digital Signature practical template was not found.");
        return;
    }

    topicContent.appendChild(
        practicalTemplate.content.cloneNode(true)
    );

    setupDigitalSignature();

}

    });

});


// ==========================================
// TOPIC 10 - DIGITAL SIGNATURE PRACTICAL
// ==========================================

function setupDigitalSignature() {

    const generateKeysBtn = document.getElementById("generateSignatureKeysBtn");
    const keyStatus = document.getElementById("signatureKeyStatus");
    const publicKeyOutput = document.getElementById("signaturePublicKey");

    const messageInput = document.getElementById("signMessageInput");
    const signBtn = document.getElementById("signMessageBtn");
    const signatureOutput = document.getElementById("signatureOutput");
    const signStatus = document.getElementById("signMessageStatus");

    const verifyMessageInput = document.getElementById("verifySignatureMessage");
    const verifySignatureInput = document.getElementById("verifySignatureInput");
    const verifyBtn = document.getElementById("verifySignatureBtn");
    const verifyStatus = document.getElementById("signatureVerifyStatus");

    const requiredElements = [
        generateKeysBtn, keyStatus, publicKeyOutput,
        messageInput, signBtn, signatureOutput, signStatus,
        verifyMessageInput, verifySignatureInput, verifyBtn, verifyStatus
    ];

    if (requiredElements.some(element => !element)) {
        console.error("Digital Signature practical HTML elements are missing.");
        return;
    }

    let keyPair = null;

    function arrayBufferToBase64(buffer) {
        return bytesToBase64(new Uint8Array(buffer));
    }

    generateKeysBtn.addEventListener("click", async function () {

        try {
            keyStatus.textContent = "Generating RSA keys...";
            generateKeysBtn.disabled = true;

            keyPair = await crypto.subtle.generateKey(
                {
                    name: "RSA-PSS",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                },
                true,
                ["sign", "verify"]
            );

            const publicKeyData = await crypto.subtle.exportKey(
                "spki",
                keyPair.publicKey
            );

            publicKeyOutput.value = arrayBufferToBase64(publicKeyData);

            keyStatus.textContent = "RSA key pair generated successfully!";

            signatureOutput.value = "";
            signStatus.textContent = "";
            verifyStatus.textContent = "";

        } catch (error) {
            keyStatus.textContent = "Key generation failed: " + error.message;
        } finally {
            generateKeysBtn.disabled = false;
        }

    });

    signBtn.addEventListener("click", async function () {

        const message = messageInput.value;

        if (!keyPair) {
            signStatus.textContent = "Please generate RSA keys first.";
            return;
        }

        if (!message.trim()) {
            signStatus.textContent = "Please enter a message.";
            return;
        }

        try {
            signStatus.textContent = "Signing message...";

            const messageBytes = new TextEncoder().encode(message);

            const signature = await crypto.subtle.sign(
                {
                    name: "RSA-PSS",
                    saltLength: 32
                },
                keyPair.privateKey,
                messageBytes
            );

            const signatureBase64 = arrayBufferToBase64(signature);

            signatureOutput.value = signatureBase64;

            // Fill the verification activity with the signed data.
            verifyMessageInput.value = message;
            verifySignatureInput.value = signatureBase64;

            signStatus.textContent = "Message signed successfully!";

        } catch (error) {
            signStatus.textContent = "Signing failed: " + error.message;
        }

    });

    verifyBtn.addEventListener("click", async function () {

        if (!keyPair) {
            verifyStatus.textContent = "Please generate RSA keys first.";
            return;
        }

        const message = verifyMessageInput.value;
        const signatureText = verifySignatureInput.value.trim();

        if (!message.trim() || !signatureText) {
            verifyStatus.textContent = "Enter the message and digital signature.";
            return;
        }

        try {
            verifyStatus.textContent = "Verifying signature...";

            const messageBytes = new TextEncoder().encode(message);
            const signatureBytes = base64ToBytes(signatureText);

            const isValid = await crypto.subtle.verify(
                {
                    name: "RSA-PSS",
                    saltLength: 32
                },
                keyPair.publicKey,
                signatureBytes,
                messageBytes
            );

            if (isValid) {
                verifyStatus.textContent =
                    "Valid signature! The message has not been changed.";
            } else {
                verifyStatus.textContent =
                    "Invalid signature! The message or signature may have been changed.";
            }

        } catch (error) {
            verifyStatus.textContent =
                "Verification failed. Check the message and signature.";
        }

    });

    addClearButton(document.getElementById("topicContent") || document, function () {

        keyPair = null;

        publicKeyOutput.value = "";
        keyStatus.textContent = "";

        messageInput.value = "";
        signatureOutput.value = "";
        signStatus.textContent = "";

        verifyMessageInput.value = "";
        verifySignatureInput.value = "";
        verifyStatus.textContent = "";

    });

}


// ==========================================
// HELPER FUNCTIONS FOR BASE64 DATA
// ==========================================

function bytesToBase64(bytes) {

    let binary = "";

    bytes.forEach(function(byte) {
        binary += String.fromCharCode(byte);
    });

    return btoa(binary);
}


function base64ToBytes(base64) {

    const binary = atob(base64);

    return Uint8Array.from(binary, function(character) {
        return character.charCodeAt(0);
    });
}


// ==========================================
// TOPIC 02 - BASE64 ENCODER & DECODER
// ==========================================

function setupBase64() {

    const input = document.getElementById("base64Input");
    const output = document.getElementById("base64Output");

    const encodeBtn = document.getElementById("base64EncodeBtn");
    const decodeBtn = document.getElementById("base64DecodeBtn");

    const status = document.getElementById("base64Status");


    encodeBtn.addEventListener("click", function() {

        const message = input.value;

        if (message === "") {
            status.textContent = "Please enter a message.";
            return;
        }

        try {

            const bytes = new TextEncoder().encode(message);
            const encoded = bytesToBase64(bytes);

            output.value = encoded;
            status.textContent = "Encoding successful!";

        } catch (error) {

            status.textContent = "Encoding failed.";

        }

    });


    decodeBtn.addEventListener("click", function() {

        const encodedMessage =
            output.value.trim() || input.value.trim();

        if (encodedMessage === "") {
            status.textContent = "Please enter Base64 text.";
            return;
        }

        try {

            const bytes = base64ToBytes(encodedMessage);

            const decoded = new TextDecoder("utf-8", {
                fatal: true
            }).decode(bytes);

            output.value = decoded;
            status.textContent = "Decoding successful!";

        } catch (error) {

            status.textContent =
                "Invalid Base64 input. Enter valid Base64 text.";

        }

    });

}


// ==========================================
// TOPIC 02 & TOPIC 04 - AES ENCRYPTION
// ==========================================

async function deriveAESKey(password, salt) {

    const passwordBytes = new TextEncoder().encode(password);

    const importedKey = await crypto.subtle.importKey(
        "raw",
        passwordBytes,
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 150000,
            hash: "SHA-256"
        },
        importedKey,
        {
            name: "AES-GCM",
            length: 256
        },
        false,
        ["encrypt", "decrypt"]
    );
}


function setupAES() {

    const input = document.getElementById("aesInput");
    const password = document.getElementById("aesPassword");
    const output = document.getElementById("aesOutput");

    const encryptButton = document.getElementById("aesEncryptBtn");
    const decryptButton = document.getElementById("aesDecryptBtn");

    const status = document.getElementById("aesStatus");


    encryptButton.addEventListener("click", async function() {

        const message = input.value;
        const secretPassword = password.value;

        if (message === "" || secretPassword === "") {
            status.textContent = "Enter both a message and a password.";
            return;
        }

        try {

            status.textContent = "Encrypting...";

            const salt = crypto.getRandomValues(new Uint8Array(16));
            const iv = crypto.getRandomValues(new Uint8Array(12));

            const key = await deriveAESKey(secretPassword, salt);

            const encryptedData = await crypto.subtle.encrypt(
                {
                    name: "AES-GCM",
                    iv: iv
                },
                key,
                new TextEncoder().encode(message)
            );

            const packageData = {
                salt: bytesToBase64(salt),
                iv: bytesToBase64(iv),
                ciphertext: bytesToBase64(
                    new Uint8Array(encryptedData)
                )
            };

            const packageText = JSON.stringify(packageData);

            const packageBase64 = bytesToBase64(
                new TextEncoder().encode(packageText)
            );

            output.value = "CL-AES1:" + packageBase64;

            status.textContent = "AES-256 encryption successful!";

        } catch (error) {

            status.textContent =
                "Encryption failed: " + error.message;

        }

    });


    decryptButton.addEventListener("click", async function() {

        const secretPassword = password.value;

        const encryptedText = output.value.startsWith("CL-AES1:")
            ? output.value.trim()
            : input.value.trim();

        if (secretPassword === "") {
            status.textContent = "Enter your password.";
            return;
        }

        if (!encryptedText.startsWith("CL-AES1:")) {
            status.textContent =
                "Encrypt a message first or paste a CryptoLab encrypted result into the message field.";
            return;
        }

        try {

            status.textContent = "Decrypting...";

            const packageBase64 = encryptedText.substring(8);
            const packageBytes = base64ToBytes(packageBase64);
            const packageText = new TextDecoder().decode(packageBytes);
            const packageData = JSON.parse(packageText);

            const salt = base64ToBytes(packageData.salt);
            const iv = base64ToBytes(packageData.iv);
            const ciphertext = base64ToBytes(packageData.ciphertext);

            const key = await deriveAESKey(secretPassword, salt);

            const decryptedData = await crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv: iv
                },
                key,
                ciphertext
            );

            output.value = new TextDecoder().decode(decryptedData);

            status.textContent = "AES decryption successful!";

        } catch (error) {

            status.textContent =
                "Decryption failed. Check your password and encrypted message.";

        }

    });

}
// ==========================================
// TOPIC 02 & TOPIC 07 - SHA-256
// ==========================================

async function generateSHA256Hash(message) {

    const messageBytes = new TextEncoder().encode(message);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-256",
        messageBytes
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray.map(function(byte) {
        return byte.toString(16).padStart(2, "0");
    }).join("");
}


function setupSHA256() {

    const input = document.getElementById("hashInput");
    const output = document.getElementById("hashOutput");
    const generateButton = document.getElementById("hashGenerateBtn");
    const status = document.getElementById("hashStatus");

    const avalancheInput1 = document.getElementById("avalancheInput1");
    const avalancheInput2 = document.getElementById("avalancheInput2");
    const compareButton = document.getElementById("compareHashBtn");
    const avalancheHash1 = document.getElementById("avalancheHash1");
    const avalancheHash2 = document.getElementById("avalancheHash2");
    const avalancheStatus = document.getElementById("avalancheStatus");

    const verifyInput1 = document.getElementById("verifyInput1");
    const verifyInput2 = document.getElementById("verifyInput2");
    const verifyButton = document.getElementById("verifyHashBtn");
    const verifyStatus = document.getElementById("verifyStatus");


    // PRACTICAL 1 - HASH GENERATOR

    if (generateButton && input && output && status) {

        generateButton.addEventListener("click", async function() {

            const message = input.value;

            if (message === "") {
                status.textContent = "Please enter a message.";
                output.value = "";
                return;
            }

            try {

                status.textContent = "Generating hash...";

                const hash = await generateSHA256Hash(message);

                output.value = hash;
                status.textContent =
                    "SHA-256 hash generated successfully!";

            } catch (error) {

                status.textContent =
                    "Hash generation failed: " + error.message;

            }

        });

    }


    // PRACTICAL 2 - AVALANCHE EFFECT

    if (
        compareButton &&
        avalancheInput1 &&
        avalancheInput2 &&
        avalancheHash1 &&
        avalancheHash2 &&
        avalancheStatus
    ) {

        compareButton.addEventListener("click", async function() {

            const message1 = avalancheInput1.value;
            const message2 = avalancheInput2.value;

            if (message1 === "" || message2 === "") {
                avalancheStatus.textContent =
                    "Please enter both messages.";
                avalancheHash1.value = "";
                avalancheHash2.value = "";
                return;
            }

            try {

                avalancheStatus.textContent = "Comparing hashes...";

                const hash1 = await generateSHA256Hash(message1);
                const hash2 = await generateSHA256Hash(message2);

                avalancheHash1.value = hash1;
                avalancheHash2.value = hash2;

                if (hash1 === hash2) {

                    avalancheStatus.textContent =
                        "Both messages produce the same hash.";

                } else {

                    avalancheStatus.textContent =
                        "The hashes are different. A small input change produces a very different hash (Avalanche Effect).";

                }

            } catch (error) {

                avalancheStatus.textContent =
                    "Hash comparison failed: " + error.message;

            }

        });

    }


    // PRACTICAL 3 - HASH VERIFICATION

    if (
        verifyButton &&
        verifyInput1 &&
        verifyInput2 &&
        verifyStatus
    ) {

        verifyButton.addEventListener("click", async function() {

            const message1 = verifyInput1.value;
            const message2 = verifyInput2.value;

            if (message1 === "" || message2 === "") {
                verifyStatus.textContent =
                    "Please enter both messages.";
                return;
            }

            try {

                verifyStatus.textContent = "Verifying messages...";

                const hash1 = await generateSHA256Hash(message1);
                const hash2 = await generateSHA256Hash(message2);

                if (hash1 === hash2) {

                    verifyStatus.textContent =
                        "Verification successful! Both messages have matching SHA-256 hashes.";

                } else {

                    verifyStatus.textContent =
                        "Verification failed! The SHA-256 hashes do not match.";

                }

            } catch (error) {

                verifyStatus.textContent =
                    "Verification failed: " + error.message;

            }

        });

    }

}


// ==========================================
// TOPIC 05 - RSA ENCRYPTION & DECRYPTION
// ==========================================

function setupRSA() {

    const generateButton = document.getElementById("rsaGenerateBtn");
    const encryptButton = document.getElementById("rsaEncryptBtn");
    const decryptButton = document.getElementById("rsaDecryptBtn");

    const input = document.getElementById("rsaInput");
    const output = document.getElementById("rsaOutput");

    const decryptedOutput =
        document.getElementById("rsaDecryptedOutput");

    const keyStatus = document.getElementById("rsaKeyStatus");
    const status = document.getElementById("rsaStatus");

    let publicKey = null;
    let privateKey = null;

    if (
        !generateButton || !encryptButton || !decryptButton ||
        !input || !output || !decryptedOutput ||
        !keyStatus || !status
    ) {
        console.error("RSA practical HTML elements are missing.");
        return;
    }


    addClearButton(topicContent, function() {

        input.value = "";
        output.value = "";
        decryptedOutput.value = "";

        publicKey = null;
        privateKey = null;

        keyStatus.textContent =
            "RSA keys cleared. Generate new keys to continue.";

        status.textContent = "";

    }, "rsaClearBtn");


    // GENERATE RSA KEYS

    generateButton.addEventListener("click", async function() {

        try {

            keyStatus.textContent = "Generating RSA keys...";
            status.textContent = "";

            const keyPair = await crypto.subtle.generateKey(
                {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                },
                false,
                ["encrypt", "decrypt"]
            );

            publicKey = keyPair.publicKey;
            privateKey = keyPair.privateKey;

            output.value = "";
            decryptedOutput.value = "";

            keyStatus.textContent =
                "RSA public and private keys generated successfully!";

        } catch (error) {

            publicKey = null;
            privateKey = null;

            keyStatus.textContent =
                "Key generation failed: " + error.message;

        }

    });


    // ENCRYPT MESSAGE USING PUBLIC KEY

    encryptButton.addEventListener("click", async function() {

        const message = input.value;

        if (!publicKey) {
            status.textContent = "Please generate RSA keys first.";
            return;
        }

        if (message.trim() === "") {
            status.textContent = "Please enter a message.";
            return;
        }

        try {

            status.textContent = "Encrypting message...";

            const messageBytes = new TextEncoder().encode(message);

            if (messageBytes.length > 190) {
                status.textContent =
                    "Message is too long. Enter a message of 190 bytes or fewer.";
                return;
            }

            const encryptedData = await crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                publicKey,
                messageBytes
            );

            output.value = bytesToBase64(
                new Uint8Array(encryptedData)
            );

            decryptedOutput.value = "";

            status.textContent = "RSA encryption successful!";

        } catch (error) {

            status.textContent =
                "RSA encryption failed. Please try again.";

        }

    });


    // DECRYPT MESSAGE USING PRIVATE KEY

    decryptButton.addEventListener("click", async function() {

        if (!privateKey) {
            status.textContent = "Please generate RSA keys first.";
            return;
        }

        if (output.value.trim() === "") {
            status.textContent = "Please encrypt a message first.";
            return;
        }

        try {

            status.textContent = "Decrypting message...";

            const encryptedBytes = base64ToBytes(
                output.value.trim()
            );

            const decryptedData = await crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP"
                },
                privateKey,
                encryptedBytes
            );

            decryptedOutput.value =
                new TextDecoder().decode(decryptedData);

            status.textContent = "RSA decryption successful!";

        } catch (error) {

            status.textContent =
                "Decryption failed. Check the encrypted message and generated keys.";

        }

    });

}


// ==========================================
// TOPIC 06 - HYBRID CRYPTOGRAPHY
// AES + RSA
// ==========================================

function setupHybrid() {

    let hybridKeyPair = null;
    let hybridPackage = null;

    const generateBtn =
        document.getElementById("hybridGenerateBtn");

    const keyStatus =
        document.getElementById("hybridKeyStatus");

    const messageInput =
        document.getElementById("hybridInput");

    const encryptBtn =
        document.getElementById("hybridEncryptBtn");

    const cipherOutput =
        document.getElementById("hybridCiphertext");

    const encryptedKeyOutput =
        document.getElementById("hybridEncryptedKey");

    const decryptBtn =
        document.getElementById("hybridDecryptBtn");

    const decryptedOutput =
        document.getElementById("hybridDecryptedOutput");

    const status =
        document.getElementById("hybridStatus");

    const decryptStatus =
        document.getElementById("hybridDecryptStatus");

    const clearBtn =
        document.getElementById("hybridClearBtn");


    if (
        !generateBtn || !keyStatus || !messageInput ||
        !encryptBtn || !cipherOutput || !encryptedKeyOutput ||
        !decryptBtn || !decryptedOutput || !status ||
        !decryptStatus || !clearBtn
    ) {
        console.error("Hybrid practical HTML elements are missing.");
        return;
    }


    // GENERATE RSA KEYS

    generateBtn.addEventListener("click", async function() {

        try {

            keyStatus.textContent = "Generating RSA keys...";

            hybridKeyPair = await crypto.subtle.generateKey(
                {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                },
                true,
                ["encrypt", "decrypt"]
            );

            hybridPackage = null;

            cipherOutput.value = "";
            encryptedKeyOutput.value = "";
            decryptedOutput.value = "";

            status.textContent = "";
            decryptStatus.textContent = "";

            keyStatus.textContent =
                "RSA public and private keys generated successfully!";

        } catch (error) {

            hybridKeyPair = null;

            keyStatus.textContent =
                "Key generation failed: " + error.message;

        }

    });


    // ENCRYPT MESSAGE USING AES AND PROTECT AES KEY USING RSA

    encryptBtn.addEventListener("click", async function() {

        if (!hybridKeyPair) {
            status.textContent =
                "Please generate RSA keys first.";
            return;
        }

        const message = messageInput.value;

        if (message.trim() === "") {
            status.textContent = "Please enter a message.";
            return;
        }

        try {

            status.textContent = "Encrypting message...";

            hybridPackage = null;

            cipherOutput.value = "";
            encryptedKeyOutput.value = "";
            decryptedOutput.value = "";

            decryptStatus.textContent = "";

            const rawAESKey = crypto.getRandomValues(
                new Uint8Array(32)
            );

            const aesKey = await crypto.subtle.importKey(
                "raw",
                rawAESKey,
                {
                    name: "AES-GCM"
                },
                false,
                ["encrypt", "decrypt"]
            );

            const iv = crypto.getRandomValues(
                new Uint8Array(12)
            );

            const encryptedMessage = await crypto.subtle.encrypt(
                {
                    name: "AES-GCM",
                    iv: iv
                },
                aesKey,
                new TextEncoder().encode(message)
            );

            const encryptedAESKey = await crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                hybridKeyPair.publicKey,
                rawAESKey
            );

            hybridPackage = {
                iv: iv,
                encryptedMessage: new Uint8Array(encryptedMessage),
                encryptedAESKey: new Uint8Array(encryptedAESKey)
            };

            cipherOutput.value = bytesToBase64(
                hybridPackage.encryptedMessage
            );

            encryptedKeyOutput.value = bytesToBase64(
                hybridPackage.encryptedAESKey
            );

            status.textContent =
                "Message encrypted using AES. AES key protected using RSA!";

        } catch (error) {

            hybridPackage = null;

            status.textContent =
                "Encryption failed: " + error.message;

        }

    });


    // DECRYPT AES KEY USING RSA AND MESSAGE USING AES

    decryptBtn.addEventListener("click", async function() {

        if (!hybridKeyPair) {
            decryptStatus.textContent =
                "Please generate RSA keys first.";
            return;
        }

        if (!hybridPackage) {
            decryptStatus.textContent =
                "Please encrypt a message first.";
            return;
        }

        try {

            decryptStatus.textContent = "Decrypting message...";

            const recoveredAESKey = await crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP"
                },
                hybridKeyPair.privateKey,
                hybridPackage.encryptedAESKey
            );

            const aesKey = await crypto.subtle.importKey(
                "raw",
                recoveredAESKey,
                {
                    name: "AES-GCM"
                },
                false,
                ["decrypt"]
            );

            const decryptedMessage = await crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv: hybridPackage.iv
                },
                aesKey,
                hybridPackage.encryptedMessage
            );

            decryptedOutput.value =
                new TextDecoder().decode(decryptedMessage);

            decryptStatus.textContent =
                "Message decrypted successfully! Original message recovered.";

        } catch (error) {

            decryptedOutput.value = "";

            decryptStatus.textContent =
                "Decryption failed: " + error.message;

        }

    });


    // CLEAR ALL FIELDS AND KEYS

    clearBtn.addEventListener("click", function() {

        hybridKeyPair = null;
        hybridPackage = null;

        messageInput.value = "";
        cipherOutput.value = "";
        encryptedKeyOutput.value = "";
        decryptedOutput.value = "";

        keyStatus.textContent = "";
        status.textContent = "";
        decryptStatus.textContent = "";

    });

}


// ==========================================
// TOPIC 08 - PASSWORD SALTING
// PBKDF2 + SHA-256
// ==========================================

function setupSalting() {

    const passwordInput = document.getElementById("saltPassword");
    const generateBtn = document.getElementById("generateSaltHashBtn");
    const saltOutput = document.getElementById("generatedSalt");
    const hashOutput = document.getElementById("saltedHashOutput");
    const generateStatus = document.getElementById("saltGenerateStatus");

    const verifyInput = document.getElementById("verifySaltPassword");
    const verifyBtn = document.getElementById("verifySaltPasswordBtn");
    const verifyStatus = document.getElementById("saltVerifyStatus");

    const compareInput = document.getElementById("compareSaltPassword");
    const compareBtn = document.getElementById("compareSaltBtn");
    const compareHash1 = document.getElementById("compareHash1");
    const compareHash2 = document.getElementById("compareHash2");
    const compareStatus = document.getElementById("compareSaltStatus");

    let savedSalt = null;
    let savedHash = null;


    if (
        !passwordInput || !generateBtn || !saltOutput ||
        !hashOutput || !generateStatus || !verifyInput ||
        !verifyBtn || !verifyStatus || !compareInput ||
        !compareBtn || !compareHash1 || !compareHash2 ||
        !compareStatus
    ) {
        console.error("Password Salting practical HTML elements are missing.");
        return;
    }


    // CONVERT BYTES TO HEXADECIMAL

    function bytesToHex(bytes) {

        return Array.from(bytes)
            .map(function(byte) {
                return byte.toString(16).padStart(2, "0");
            })
            .join("");

    }


    // GENERATE PBKDF2 PASSWORD HASH

    async function createPasswordHash(password, salt) {

        const encoder = new TextEncoder();

        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            "PBKDF2",
            false,
            ["deriveBits"]
        );

        const derivedBits = await crypto.subtle.deriveBits(
            {
                name: "PBKDF2",
                salt: salt,
                iterations: 310000,
                hash: "SHA-256"
            },
            keyMaterial,
            256
        );

        return bytesToHex(new Uint8Array(derivedBits));

    }


    // ACTIVITY 1 - GENERATE SALTED HASH

    generateBtn.addEventListener("click", async function() {

        const password = passwordInput.value;

        if (!password) {
            generateStatus.textContent = "Please enter a password.";
            return;
        }

        try {

            generateStatus.textContent = "Generating hash...";

            savedSalt = crypto.getRandomValues(
                new Uint8Array(16)
            );

            savedHash = await createPasswordHash(
                password,
                savedSalt
            );

            saltOutput.value = bytesToHex(savedSalt);
            hashOutput.value = savedHash;

            generateStatus.textContent =
                "Salted password hash generated successfully!";

        } catch (error) {

            generateStatus.textContent =
                "Error: " + error.message;

        }

    });


    // ACTIVITY 2 - VERIFY PASSWORD

    verifyBtn.addEventListener("click", async function() {

        const password = verifyInput.value;

        if (!password) {
            verifyStatus.textContent = "Please enter a password.";
            return;
        }

        if (!savedSalt || !savedHash) {
            verifyStatus.textContent =
                "First generate a salted hash in Activity 1.";
            return;
        }

        try {

            verifyStatus.textContent = "Verifying password...";

            const enteredHash = await createPasswordHash(
                password,
                savedSalt
            );

            if (enteredHash === savedHash) {

                verifyStatus.textContent =
                    "Password verified successfully!";

            } else {

                verifyStatus.textContent =
                    "Incorrect password! Verification failed.";

            }

        } catch (error) {

            verifyStatus.textContent =
                "Error: " + error.message;

        }

    });


    // ACTIVITY 3 - COMPARE DIFFERENT SALTS

    compareBtn.addEventListener("click", async function() {

        const password = compareInput.value;

        if (!password) {
            compareStatus.textContent = "Please enter a password.";
            return;
        }

        try {

            compareStatus.textContent =
                "Generating and comparing hashes...";

            const salt1 = crypto.getRandomValues(
                new Uint8Array(16)
            );

            const salt2 = crypto.getRandomValues(
                new Uint8Array(16)
            );

            const hash1 = await createPasswordHash(
                password,
                salt1
            );

            const hash2 = await createPasswordHash(
                password,
                salt2
            );

            compareHash1.value = hash1;
            compareHash2.value = hash2;

            if (hash1 !== hash2) {

                compareStatus.textContent =
                    "Different hashes generated! Different salts produce different hashes.";

            } else {

                compareStatus.textContent =
                    "Unexpected result: hashes are identical.";

            }

        } catch (error) {

            compareStatus.textContent =
                "Error: " + error.message;

        }

    });


    // CLEAR ALL

    addClearButton(topicContent, function() {

        passwordInput.value = "";
        saltOutput.value = "";
        hashOutput.value = "";
        generateStatus.textContent = "";

        verifyInput.value = "";
        verifyStatus.textContent = "";

        compareInput.value = "";
        compareHash1.value = "";
        compareHash2.value = "";
        compareStatus.textContent = "";

        savedSalt = null;
        savedHash = null;

    });

}


// ==========================================
// TOPIC 09 - HMAC-SHA256
// ==========================================

function setupHMAC() {

    const encoder = new TextEncoder();

    let tamperHmac = null;
    let tamperKey = null;


    // CONVERT BYTES INTO HEXADECIMAL

    function bytesToHex(bytes) {

        return Array.from(new Uint8Array(bytes))
            .map(function(byte) {
                return byte.toString(16).padStart(2, "0");
            })
            .join("");

    }


    // CONVERT HEXADECIMAL INTO BYTES

    function hexToBytes(hex) {

        if (
            typeof hex !== "string" ||
            hex.length === 0 ||
            hex.length % 2 !== 0 ||
            !/^[0-9a-f]+$/i.test(hex)
        ) {
            throw new Error("Invalid HMAC hexadecimal value.");
        }

        const bytes = new Uint8Array(hex.length / 2);

        for (let i = 0; i < hex.length; i += 2) {

            bytes[i / 2] = parseInt(
                hex.substring(i, i + 2),
                16
            );

        }

        return bytes;

    }


    // IMPORT SHARED SECRET KEY

    async function importHMACKey(secret) {

        if (!secret) {
            throw new Error("Please enter a secret key.");
        }

        return crypto.subtle.importKey(
            "raw",
            encoder.encode(secret),
            {
                name: "HMAC",
                hash: "SHA-256"
            },
            false,
            ["sign", "verify"]
        );

    }


    // GENERATE HMAC-SHA256

    async function generateHMAC(message, secret) {

        const key = await importHMACKey(secret);

        const signature = await crypto.subtle.sign(
            "HMAC",
            key,
            encoder.encode(message)
        );

        return bytesToHex(signature);

    }


    // VERIFY HMAC-SHA256

    async function verifyHMAC(message, secret, hmacHex) {

        const key = await importHMACKey(secret);
        const signatureBytes = hexToBytes(hmacHex);

        return crypto.subtle.verify(
            "HMAC",
            key,
            signatureBytes,
            encoder.encode(message)
        );

    }


    // GET HTML ELEMENTS

    const messageInput = document.getElementById("hmacMessage");
    const secretInput = document.getElementById("hmacSecretKey");
    const generateButton = document.getElementById("generateHmacBtn");
    const hmacOutput = document.getElementById("hmacOutput");
    const generateStatus = document.getElementById("hmacGenerateStatus");

    const verifyMessage = document.getElementById("verifyHmacMessage");
    const verifyKey = document.getElementById("verifyHmacKey");
    const verifyCode = document.getElementById("verifyHmacCode");
    const verifyButton = document.getElementById("verifyHmacBtn");
    const verifyStatus = document.getElementById("hmacVerifyStatus");

    const tamperMessage = document.getElementById("tamperMessage");
    const tamperKeyInput = document.getElementById("tamperKey");
    const generateTamperButton =
        document.getElementById("generateTamperHmacBtn");

    const tamperOutput = document.getElementById("tamperHmacOutput");
    const modifiedMessage = document.getElementById("modifiedMessage");
    const checkTamperButton = document.getElementById("checkTamperBtn");
    const tamperStatus = document.getElementById("tamperStatus");


    if (
        !messageInput || !secretInput || !generateButton ||
        !hmacOutput || !generateStatus ||
        !verifyMessage || !verifyKey || !verifyCode ||
        !verifyButton || !verifyStatus ||
        !tamperMessage || !tamperKeyInput ||
        !generateTamperButton || !tamperOutput ||
        !modifiedMessage || !checkTamperButton ||
        !tamperStatus
    ) {
        console.error("HMAC practical HTML elements are missing.");
        return;
    }


    // ======================================
    // ACTIVITY 1 - GENERATE HMAC
    // ======================================

    generateButton.addEventListener("click", async function() {

        const message = messageInput.value;
        const secret = secretInput.value;

        if (message.trim() === "") {
            generateStatus.textContent = "Please enter a message.";
            return;
        }

        if (secret === "") {
            generateStatus.textContent = "Please enter a secret key.";
            return;
        }

        try {

            generateStatus.textContent = "Generating HMAC...";

            const hmac = await generateHMAC(message, secret);

            hmacOutput.value = hmac;

            generateStatus.textContent =
                "HMAC-SHA256 generated successfully!";

        } catch (error) {

            generateStatus.textContent =
                "HMAC generation failed: " + error.message;

        }

    });


    // ======================================
    // ACTIVITY 2 - VERIFY HMAC
    // ======================================

    verifyButton.addEventListener("click", async function() {

        const message = verifyMessage.value;
        const secret = verifyKey.value;
        const hmac = verifyCode.value.trim();

        if (message.trim() === "") {
            verifyStatus.textContent = "Please enter the message.";
            return;
        }

        if (secret === "") {
            verifyStatus.textContent = "Please enter the secret key.";
            return;
        }

        if (hmac === "") {
            verifyStatus.textContent = "Please enter the HMAC value.";
            return;
        }

        try {

            verifyStatus.textContent = "Verifying HMAC...";

            const isValid = await verifyHMAC(
                message,
                secret,
                hmac
            );

            if (isValid) {

                verifyStatus.textContent =
                    "HMAC verified successfully! Message integrity confirmed.";

            } else {

                verifyStatus.textContent =
                    "Verification failed! The message, secret key, or HMAC is incorrect.";

            }

        } catch (error) {

            verifyStatus.textContent =
                "HMAC verification failed: " + error.message;

        }

    });


    // ======================================
    // ACTIVITY 3 - DEMONSTRATE MESSAGE TAMPERING
    // ======================================

    generateTamperButton.addEventListener("click", async function() {

        const message = tamperMessage.value;
        const secret = tamperKeyInput.value;

        if (message.trim() === "") {
            tamperStatus.textContent = "Please enter an original message.";
            return;
        }

        if (secret === "") {
            tamperStatus.textContent = "Please enter a secret key.";
            return;
        }

        try {

            tamperStatus.textContent = "Generating original HMAC...";

            tamperKey = await importHMACKey(secret);

            const signature = await crypto.subtle.sign(
                "HMAC",
                tamperKey,
                encoder.encode(message)
            );

            tamperHmac = new Uint8Array(signature);

            tamperOutput.value = bytesToHex(tamperHmac);

            modifiedMessage.value = "";

            tamperStatus.textContent =
                "Original HMAC generated. Now change the message and test it.";

        } catch (error) {

            tamperHmac = null;
            tamperKey = null;

            tamperStatus.textContent =
                "HMAC generation failed: " + error.message;

        }

    });


    // CHECK WHETHER MODIFIED MESSAGE PASSES VERIFICATION

    checkTamperButton.addEventListener("click", async function() {

        const changedMessage = modifiedMessage.value;

        if (!tamperKey || !tamperHmac) {
            tamperStatus.textContent =
                "First generate the original HMAC.";
            return;
        }

        if (changedMessage.trim() === "") {
            tamperStatus.textContent =
                "Please enter the modified message.";
            return;
        }

        try {

            tamperStatus.textContent = "Checking message integrity...";

            const isValid = await crypto.subtle.verify(
                "HMAC",
                tamperKey,
                tamperHmac,
                encoder.encode(changedMessage)
            );

            if (isValid) {

                tamperStatus.textContent =
                    "HMAC valid. The message matches the original message.";

            } else {

                tamperStatus.textContent =
                    "Tampering detected! The modified message does not match the original HMAC.";

            }

        } catch (error) {

            tamperStatus.textContent =
                "Verification failed: " + error.message;

        }

    });


    // ======================================
    // CLEAR ALL
    // ======================================

    addClearButton(topicContent, function() {

        messageInput.value = "";
        secretInput.value = "";
        hmacOutput.value = "";
        generateStatus.textContent = "";

        verifyMessage.value = "";
        verifyKey.value = "";
        verifyCode.value = "";
        verifyStatus.textContent = "";

        tamperMessage.value = "";
        tamperKeyInput.value = "";
        tamperOutput.value = "";
        modifiedMessage.value = "";
        tamperStatus.textContent = "";

        tamperHmac = null;
        tamperKey = null;

    });

}

// ==========================================
// PKI INTERACTIVE DIAGRAM
// ==========================================

function setupPKIInteractive(container) {

    const diagram = document.createElement("div");
    diagram.className = "pki-walkthrough";

    diagram.innerHTML = `
        <h2>Interactive PKI Process</h2>
        <p>Follow the steps to understand how Ali connects securely to his bank.</p>

        <div class="pki-progress">
            <span id="pkiStepNumber">STEP 1 OF 6</span>
            <div class="pki-progress-track">
                <div id="pkiProgressBar"></div>
            </div>
        </div>

        <div class="pki-diagram">

            <div class="pki-node" data-node="bank">
                <div class="pki-node-icon">🏦</div>
                <h3>Bank Website</h3>
                <p>Bank's server</p>
            </div>

            <div class="pki-arrow" data-arrow="bank-ca">
                <span>→</span>
                <small>Certificate request</small>
            </div>

            <div class="pki-node" data-node="ca">
                <div class="pki-node-icon">🛡️</div>
                <h3>Certificate Authority</h3>
                <p>Trusted CA</p>
            </div>

            <div class="pki-arrow" data-arrow="ca-bank">
                <span>→</span>
                <small>Signed certificate</small>
            </div>

            <div class="pki-node" data-node="browser">
                <div class="pki-node-icon">🌐</div>
                <h3>Ali's Browser</h3>
                <p>Checks the certificate</p>
            </div>

            <div class="pki-arrow" data-arrow="browser-ali">
                <span>→</span>
                <small>Secure connection</small>
            </div>

            <div class="pki-node" data-node="ali">
                <div class="pki-node-icon">👨‍💻</div>
                <h3>Ali</h3>
                <p>Website visitor</p>
            </div>

        </div>

        <div class="pki-explanation">
            <h3 id="pkiStepTitle">Step 1: Bank generates its keys</h3>
            <p id="pkiStepDescription"></p>
        </div>

        <div class="pki-controls">
            <button type="button" id="pkiPrevious" disabled>
                ← Previous
            </button>

            <button type="button" id="pkiNext">
                Next →
            </button>
        </div>
    `;

    container.appendChild(diagram);

    const steps = [
        {
            title: "Step 1: Bank generates its keys",
            description: "The bank creates a public key and a private key. It prepares a certificate request containing its public key and website identity, then sends the request to a Certificate Authority.",
            nodes: ["bank", "ca"],
            arrows: ["bank-ca"]
        },
        {
            title: "Step 2: CA issues the certificate",
            description: "The Certificate Authority verifies the bank's identity. If the checks succeed, the CA digitally signs and issues a certificate containing the bank's public key.",
            nodes: ["bank", "ca"],
            arrows: ["ca-bank"]
        },
        {
            title: "Step 3: Bank sends its certificate",
            description: "Later, Ali visits the bank's HTTPS website. During the TLS connection setup, the bank sends its digital certificate to Ali's browser.",
            nodes: ["bank", "browser"],
            arrows: ["bank-browser"]
        },
        {
            title: "Step 4: Browser verifies the certificate",
            description: "The browser checks the certificate's CA signature, website name, validity period and trust status. If the checks fail, the browser may show a security warning.",
            nodes: ["browser", "ca"],
            arrows: ["browser-ca"]
        },
        {
            title: "Step 5: TLS establishes security",
            description: "After successful certificate validation, the TLS handshake establishes shared session keys. The bank's certificate helps authenticate the bank's server.",
            nodes: ["bank", "browser"],
            arrows: ["bank-browser"]
        },
        {
            title: "Step 6: Secure communication",
            description: "Ali and the bank now communicate using encryption with the negotiated session keys. This protects data while it travels between the browser and bank.",
            nodes: ["ali", "browser", "bank"],
            arrows: ["browser-ali", "bank-browser"]
        }
    ];

    let currentStep = 0;

    const title = diagram.querySelector("#pkiStepTitle");
    const description = diagram.querySelector("#pkiStepDescription");
    const stepNumber = diagram.querySelector("#pkiStepNumber");
    const progressBar = diagram.querySelector("#pkiProgressBar");
    const previousBtn = diagram.querySelector("#pkiPrevious");
    const nextBtn = diagram.querySelector("#pkiNext");

    function showStep() {

        const step = steps[currentStep];

        title.textContent = step.title;
        description.textContent = step.description;

        stepNumber.textContent =
            "STEP " + (currentStep + 1) + " OF " + steps.length;

        progressBar.style.width =
            ((currentStep + 1) / steps.length * 100) + "%";

        diagram.querySelectorAll(".pki-node").forEach(function(node) {
            node.classList.toggle(
                "active",
                step.nodes.includes(node.dataset.node)
            );
        });

        diagram.querySelectorAll(".pki-arrow").forEach(function(arrow) {
            const arrowName = arrow.dataset.arrow;

            arrow.classList.toggle(
                "active",
                step.arrows.includes(arrowName)
            );
        });

        previousBtn.disabled = currentStep === 0;

        if (currentStep === steps.length - 1) {
            nextBtn.textContent = "Start Again ↻";
        } else {
            nextBtn.textContent = "Next →";
        }
    }

    nextBtn.addEventListener("click", function() {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        showStep();
    });

    previousBtn.addEventListener("click", function() {

        if (currentStep > 0) {
            currentStep--;
            showStep();
        }
    });

    showStep();
}
// ==========================================
// TOPIC 11 - PKI AND DIGITAL CERTIFICATES PRACTICAL
// ==========================================

function setupPKI() {

    const generateCAButton = document.getElementById("generateCAKeysBtn");
    const generateUserButton = document.getElementById("generateUserKeysBtn");
    const issueButton = document.getElementById("issueCertificateBtn");
    const verifyButton = document.getElementById("verifyCertificateBtn");
    const tamperButton = document.getElementById("tamperCertificateBtn");

    const userNameInput = document.getElementById("pkiUserName");
    const certificateOutput = document.getElementById("pkiCertificateOutput");

    const caStatus = document.getElementById("caKeyStatus");
    const userStatus = document.getElementById("userKeyStatus");
    const issueStatus = document.getElementById("issueCertificateStatus");
    const verifyStatus = document.getElementById("certificateVerifyStatus");

    const requiredElements = [
        generateCAButton,
        generateUserButton,
        issueButton,
        verifyButton,
        tamperButton,
        userNameInput,
        certificateOutput,
        caStatus,
        userStatus,
        issueStatus,
        verifyStatus
    ];

    if (requiredElements.some(element => !element)) {
        console.error("PKI practical HTML elements are missing.");
        return;
    }

    let caKeyPair = null;
    let userKeyPair = null;
    let certificate = null;

    function certificateData(cert) {
        return JSON.stringify({
            subject: cert.subject,
            issuer: cert.issuer,
            publicKey: cert.publicKey,
            serialNumber: cert.serialNumber,
            issuedAt: cert.issuedAt,
            expiresAt: cert.expiresAt,
            algorithm: cert.algorithm
        });
    }

    // ACTIVITY 1 - GENERATE CA KEYS

    generateCAButton.addEventListener("click", async function() {

        try {
            caStatus.textContent = "Generating CA keys...";
            generateCAButton.disabled = true;

            caKeyPair = await crypto.subtle.generateKey(
                {
                    name: "RSA-PSS",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                },
                true,
                ["sign", "verify"]
            );

            certificate = null;
            certificateOutput.value = "";

            issueStatus.textContent = "";
            verifyStatus.textContent = "";

            caStatus.textContent = "CA keys generated successfully!";

        } catch (error) {
            caStatus.textContent = "CA key generation failed: " + error.message;
        } finally {
            generateCAButton.disabled = false;
        }

    });


    // ACTIVITY 2 - GENERATE USER KEYS

    generateUserButton.addEventListener("click", async function() {

        const userName = userNameInput.value.trim();

        if (!userName) {
            userStatus.textContent = "Please enter a user name.";
            return;
        }

        try {
            userStatus.textContent = "Generating user keys...";
            generateUserButton.disabled = true;

            userKeyPair = await crypto.subtle.generateKey(
                {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                },
                true,
                ["encrypt", "decrypt"]
            );

            certificate = null;
            certificateOutput.value = "";

            issueStatus.textContent = "";
            verifyStatus.textContent = "";

            userStatus.textContent = "User keys generated successfully!";

        } catch (error) {
            userStatus.textContent = "User key generation failed: " + error.message;
        } finally {
            generateUserButton.disabled = false;
        }

    });


    // ACTIVITY 3 - ISSUE DIGITAL CERTIFICATE

    issueButton.addEventListener("click", async function() {

        if (!caKeyPair) {
            issueStatus.textContent = "Generate CA keys first.";
            return;
        }

        if (!userKeyPair) {
            issueStatus.textContent = "Generate user keys first.";
            return;
        }

        const userName = userNameInput.value.trim();

        if (!userName) {
            issueStatus.textContent = "Enter the user name first.";
            return;
        }

        try {
            issueButton.disabled = true;
            issueStatus.textContent = "Creating digital certificate...";

            const publicKeyData = await crypto.subtle.exportKey(
                "spki",
                userKeyPair.publicKey
            );

            certificate = {
                subject: userName,
                issuer: "CryptoLab Certificate Authority",
                publicKey: bytesToBase64(new Uint8Array(publicKeyData)),
                serialNumber: crypto.randomUUID(),
                issuedAt: new Date().toISOString(),
                expiresAt: new Date(
                    Date.now() + 365 * 24 * 60 * 60 * 1000
                ).toISOString(),
                algorithm: "RSA-OAEP with SHA-256"
            };

            const certificateBytes = new TextEncoder().encode(
                certificateData(certificate)
            );

            const signature = await crypto.subtle.sign(
                {
                    name: "RSA-PSS",
                    saltLength: 32
                },
                caKeyPair.privateKey,
                certificateBytes
            );

            certificate.signature = bytesToBase64(
                new Uint8Array(signature)
            );

            certificateOutput.value = JSON.stringify(
                certificate,
                null,
                2
            );

            issueStatus.textContent =
                "Certificate issued and digitally signed by the CA!";

            verifyStatus.textContent = "";

        } catch (error) {
            issueStatus.textContent =
                "Certificate creation failed: " + error.message;
        } finally {
            issueButton.disabled = false;
        }

    });


    // ACTIVITY 4 - VERIFY DIGITAL CERTIFICATE

    verifyButton.addEventListener("click", async function() {

        if (!caKeyPair) {
            verifyStatus.textContent = "Generate CA keys first.";
            return;
        }

        if (!certificate) {
            verifyStatus.textContent = "Issue a certificate first.";
            return;
        }

        try {
            const enteredCertificate = JSON.parse(
                certificateOutput.value
            );

            if (!enteredCertificate.signature) {
                throw new Error("Certificate signature is missing.");
            }

            verifyStatus.textContent = "Verifying certificate...";

            const signatureBytes = base64ToBytes(
                enteredCertificate.signature
            );

            const certificateBytes = new TextEncoder().encode(
                certificateData(enteredCertificate)
            );

            const isValid = await crypto.subtle.verify(
                {
                    name: "RSA-PSS",
                    saltLength: 32
                },
                caKeyPair.publicKey,
                signatureBytes,
                certificateBytes
            );

            verifyStatus.textContent = isValid
                ? "VALID: The CA signature is correct and the signed contents have not been changed."
                : "INVALID: The certificate contents or signature have been changed.";

        } catch (error) {
            verifyStatus.textContent =
                "INVALID: Certificate data is incorrect or damaged.";
        }

    });


    // MODIFY CERTIFICATE - TAMPERING DEMONSTRATION

    tamperButton.addEventListener("click", function() {

        if (!certificate) {
            verifyStatus.textContent = "Issue a certificate first.";
            return;
        }

        try {
            const changedCertificate = JSON.parse(
                certificateOutput.value
            );

            changedCertificate.subject += " (Modified)";

            certificateOutput.value = JSON.stringify(
                changedCertificate,
                null,
                2
            );

            verifyStatus.textContent =
                "Certificate modified. Click Verify Certificate to detect the change.";

        } catch (error) {
            verifyStatus.textContent =
                "Unable to modify certificate data.";
        }

    });


    // CLEAR ALL

    addClearButton(topicContent, function() {

        caKeyPair = null;
        userKeyPair = null;
        certificate = null;

        userNameInput.value = "";
        certificateOutput.value = "";

        caStatus.textContent = "";
        userStatus.textContent = "";
        issueStatus.textContent = "";
        verifyStatus.textContent = "";

    });

}
// ==========================================
// CRYPTOGRAPHY QUIZ
// ==========================================

function setupQuiz() {
    const questions = [
        {
            question: "Which algorithm is commonly used for symmetric encryption?",
            options: ["RSA", "AES", "SHA-256", "HMAC"],
            answer: 1,
            explanation: "AES is a symmetric encryption algorithm. It uses the same secret key for encryption and decryption."
        },
        {
            question: "Which algorithm is commonly used for asymmetric encryption?",
            options: ["AES", "DES", "RSA", "SHA-256"],
            answer: 2,
            explanation: "RSA is an asymmetric algorithm that uses a public key and a private key."
        },
        {
            question: "What is the main purpose of hashing?",
            options: ["To decrypt data", "To create a fixed-length digest", "To exchange keys", "To hide an IP address"],
            answer: 1,
            explanation: "Hashing converts input data into a fixed-length digest. It is designed to be one-way."
        },
        {
            question: "Which of these is a hashing algorithm?",
            options: ["RSA", "AES", "SHA-256", "Caesar Cipher"],
            answer: 2,
            explanation: "SHA-256 is a cryptographic hash function that produces a 256-bit hash."
        },
        {
            question: "Why is salt added to passwords before hashing?",
            options: ["To make passwords shorter", "To make identical passwords produce different hashes", "To decrypt passwords", "To remove encryption"],
            answer: 1,
            explanation: "A unique salt helps prevent attackers from using precomputed hash tables and makes identical passwords hash differently."
        },
        {
            question: "What does HMAC provide?",
            options: ["Confidentiality only", "Data compression", "Message authentication and integrity", "File encryption"],
            answer: 2,
            explanation: "HMAC uses a secret key and a hash function to help verify message integrity and authenticity."
        },
        {
            question: "Which key is used to create a digital signature?",
            options: ["Public key", "Private key", "Session key", "Salt"],
            answer: 1,
            explanation: "The sender signs data using their private key. The corresponding public key is used to verify the signature."
        },
        {
            question: "What does PKI stand for?",
            options: ["Private Key Internet", "Public Key Infrastructure", "Password Key Integration", "Protected Key Information"],
            answer: 1,
            explanation: "PKI stands for Public Key Infrastructure. It manages digital certificates and public-key relationships."
        },
        {
            question: "What is the main purpose of a digital certificate?",
            options: ["To identify and link an entity to a public key", "To store passwords", "To encrypt every file", "To generate random salts"],
            answer: 0,
            explanation: "A digital certificate helps establish that a public key belongs to the identity named in the certificate."
        },
        {
            question: "What is hybrid cryptography?",
            options: ["Using hashing only", "Combining symmetric and asymmetric cryptography", "Using two hash functions", "Using no encryption key"],
            answer: 1,
            explanation: "Hybrid cryptography combines asymmetric cryptography for key exchange or protection with symmetric encryption for data."
        },
        
        {
            question: "What is the main purpose of the Caesar Cipher?",
            options: ["Shifting letters in the alphabet", "Generating a hash", "Creating certificates", "Exchanging keys"],
            answer: 0,
            explanation: "Caesar Cipher encrypts text by shifting each letter by a fixed number of positions."
        },
        {
            question: "Is Base64 a form of encryption?",
            options: ["Yes, it uses a secret key", "No, it is an encoding technique", "Yes, it uses RSA", "No, it is hashing"],
            answer: 1,
            explanation: "Base64 converts binary data into text. It does not provide security or confidentiality."
        },
        {
            question: "What is the key feature of AES?",
            options: ["It is a hashing algorithm", "It uses public and private keys", "It is symmetric encryption", "It creates digital signatures"],
            answer: 2,
            explanation: "AES uses the same secret key for encryption and decryption."
        },
        {
            question: "What is the avalanche effect?",
            options: ["A small input change causes a large output change", "A password becomes shorter", "A public key becomes private", "An encrypted file becomes larger"],
            answer: 0,
            explanation: "A small change in input produces a significantly different hash or ciphertext."
        },
        {
            question: "Which key is used to encrypt data with RSA for a recipient?",
            options: ["Recipient's public key", "Recipient's private key", "Password salt", "SHA-256 hash"],
            answer: 0,
            explanation: "The sender uses the recipient's public key. The recipient uses their private key to decrypt."
        },
        {
            question: "What happens when the same password is hashed with two different random salts?",
            options: ["Both hashes are identical", "The hashes are normally different", "Both passwords become encrypted", "The salts disappear"],
            answer: 1,
            explanation: "Different salts normally produce different password hashes, even for the same password."
        },
        {
            question: "Which secret is required to generate an HMAC?",
            options: ["Public certificate", "Private signing key", "Shared secret key", "Digital signature"],
            answer: 2,
            explanation: "HMAC uses a shared secret key and a cryptographic hash function."
        },
        {
            question: "Who usually signs a digital certificate?",
            options: ["Certificate Authority (CA)", "Web browser user", "Password manager", "Network router"],
            answer: 0,
            explanation: "A Certificate Authority signs certificates to establish trust in identity and public-key information."
        },
        {
            question: "What does successful digital signature verification indicate?",
            options: ["The message is automatically decrypted", "The signature matches the message and public key", "The private key is revealed", "The message is compressed"],
            answer: 1,
            explanation: "Successful verification means the signature matches the checked message and public key. Identity trust requires additional checks."
        },
        {
            question: "Which security property does encryption mainly provide?",
            options: ["Availability", "Confidentiality", "Non-repudiation", "Data compression"],
            answer: 1,
            explanation: "Encryption protects confidentiality by making data unreadable without the required decryption key."
        }

    ];

    const questionElement = document.getElementById("quizQuestion");
    const optionsElement = document.getElementById("quizOptions");
    const feedbackElement = document.getElementById("quizFeedback");
    const progressElement = document.getElementById("quizProgress");
    const scoreElement = document.getElementById("quizScore");
    const progressFill = document.getElementById("quizProgressFill");
    const nextButton = document.getElementById("nextQuizBtn");
    const resultElement = document.getElementById("quizResult");
    const cardElement = document.querySelector(".quiz-card");

    if (!questionElement || !optionsElement || !nextButton) {
        console.error("Quiz elements were not found.");
        return;
    }

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function showQuestion() {
        answered = false;

        const current = questions[currentQuestion];

        progressElement.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

        scoreElement.textContent = `Score: ${score}`;

        progressFill.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;

        questionElement.textContent = current.question;
        optionsElement.innerHTML = "";
        feedbackElement.textContent = "";
        feedbackElement.className = "quiz-feedback";

        nextButton.disabled = true;
        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "See Results"
                : "Next Question";

        current.options.forEach((option, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "quiz-option";
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

            button.addEventListener("click", () => checkAnswer(index));

            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        if (answered) return;

        answered = true;

        const current = questions[currentQuestion];
        const optionButtons = optionsElement.querySelectorAll(".quiz-option");

        optionButtons.forEach((button, index) => {
            button.disabled = true;

            if (index === current.answer) {
                button.classList.add("correct");
            } else if (index === selectedIndex) {
                button.classList.add("incorrect");
            }
        });

        if (selectedIndex === current.answer) {
            score++;
            feedbackElement.textContent =
                "Correct! " + current.explanation;
            feedbackElement.classList.add("correct-feedback");
        } else {
            feedbackElement.textContent =
                "Incorrect. " + current.explanation;
            feedbackElement.classList.add("incorrect-feedback");
        }

        scoreElement.textContent = `Score: ${score}`;
        nextButton.disabled = false;
    }

    function showResult() {
        cardElement.style.display = "none";
        resultElement.style.display = "block";

        const percentage = (score / questions.length) * 100;

        let message;

        if (percentage >= 80) {
            message = "Excellent work! You have a strong understanding of cryptography.";
        } else if (percentage >= 50) {
            message = "Good effort! Review the topics you missed and try again.";
        } else {
            message = "Keep practicing! Review the lessons and take the quiz again.";
        }

        resultElement.innerHTML = `
            <h2>Quiz Completed!</h2>
            <div class="quiz-final-score">${score} / ${questions.length}</div>
            <p>${percentage}% correct</p>
            <p>${message}</p>
            <button id="restartQuizBtn" class="quiz-next-btn">
                Restart Quiz
            </button>
        `;

        document.getElementById("restartQuizBtn").addEventListener("click", () => {
            currentQuestion = 0;
            score = 0;
            resultElement.style.display = "none";
            cardElement.style.display = "block";
            showQuestion();
        });
    }

    nextButton.addEventListener("click", () => {
        if (!answered) return;

        if (currentQuestion === questions.length - 1) {
            showResult();
        } else {
            currentQuestion++;
            showQuestion();
        }
    });

    showQuestion();
}

// ==========================================
// BASE64 ENCODING AND DECODING DIAGRAM
// ==========================================


function setupEncodingDiagram() {

    const diagram = document.getElementById("encodingDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#encodingStepNumber");
    const stepTitle = diagram.querySelector("#encodingStepTitle");
    const stepDescription = diagram.querySelector("#encodingStepDescription");
    const progressBar = diagram.querySelector("#encodingProgressBar");

    const previousButton = diagram.querySelector("#encodingPrevBtn");
    const nextButton = diagram.querySelector("#encodingNextBtn");

    const steps = [
        {
            title: "Step 1: Original Text",
            description: "We start with readable text: HELLO. This is our original message before encoding.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: Base64 Encoder",
            description: "The Base64 encoder converts the original text into bytes and represents those bytes using Base64 characters.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: Encoded Text",
            description: "The result is SEVMTE8=. This is encoded text, not encrypted text. Anyone can decode it without a secret key.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Base64 Decoder",
            description: "The decoder reads the Base64 representation and converts it back into the original bytes and readable text.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Original Text Restored",
            description: "The decoding process gives us HELLO again. The original message has been successfully restored.",
            nodes: [3, 4],
            arrows: [3]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        const step = steps[currentStep];

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                step.nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                step.arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = step.title;

        stepDescription.textContent = step.description;

        progressBar.style.width =
            ((currentStep + 1) / steps.length * 100) + "%";

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next →";
    }

    previousButton.addEventListener("click", function() {

        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }

    });

    nextButton.addEventListener("click", function() {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();

    });

    updateDiagram();
}
// ==========================================
// CAESAR CIPHER INTERACTIVE DIAGRAM
// ==========================================

function setupCaesarDiagram() {

    const diagram = document.getElementById("caesarDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#caesarStepNumber");
    const stepTitle = diagram.querySelector("#caesarStepTitle");
    const stepDescription = diagram.querySelector("#caesarStepDescription");
    const progressBar = diagram.querySelector("#caesarProgressBar");

    const previousButton = diagram.querySelector("#caesarPrevBtn");
    const nextButton = diagram.querySelector("#caesarNextBtn");

    const steps = [
        {
            title: "Step 1: Original Text",
            description: "We start with the original readable message HELLO. This is called plaintext.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: Shift Key",
            description: "The shift key is 3. It tells us to move every letter three positions forward in the alphabet.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: Encrypted Text",
            description: "Each letter moves three positions forward: H becomes K, E becomes H, L becomes O, and O becomes R. The ciphertext is KHOOR.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Decryption",
            description: "To decrypt the message, we move each letter three positions backward using the same shift key.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Original Text Restored",
            description: "After shifting the letters backward by 3 positions, KHOOR becomes HELLO again. The original message is restored.",
            nodes: [3, 4],
            arrows: [3]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();
    });

    updateDiagram();
}

// ==========================================
// SYMMETRIC ENCRYPTION INTERACTIVE DIAGRAM
// ==========================================

function setupSymmetricDiagram() {

    const diagram = document.getElementById("symmetricDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#symmetricStepNumber");
    const stepTitle = diagram.querySelector("#symmetricStepTitle");
    const stepDescription = diagram.querySelector("#symmetricStepDescription");
    const progressBar = diagram.querySelector("#symmetricProgressBar");

    const previousButton = diagram.querySelector("#symmetricPrevBtn");
    const nextButton = diagram.querySelector("#symmetricNextBtn");

    const steps = [
        {
            title: "Step 1: Alice Creates a Message",
            description: "Alice writes HELLO. This readable message is called plaintext. She wants to send it securely to Bob.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: Alice Encrypts the Message",
            description: "Alice uses a secret key and a symmetric encryption algorithm, such as AES, to convert the plaintext into ciphertext.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: Encrypted Message Is Sent",
            description: "The encrypted message is sent to Bob. It appears as unreadable data to someone who does not have the correct key.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Bob Decrypts the Message",
            description: "Bob uses the same secret key with the decryption algorithm to convert the ciphertext back into readable text.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Bob Receives the Original Message",
            description: "Bob successfully recovers HELLO. Both Alice and Bob used the same secret key. This is the main idea of symmetric encryption.",
            nodes: [3, 4],
            arrows: [3]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();
    });

    updateDiagram();
}

function setupAsymmetricDiagram() {

    const diagram = document.getElementById("asymmetricDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#asymmetricStepNumber");
    const stepTitle = diagram.querySelector("#asymmetricStepTitle");
    const stepDescription = diagram.querySelector("#asymmetricStepDescription");
    const progressBar = diagram.querySelector("#asymmetricProgressBar");

    const previousButton = diagram.querySelector("#asymmetricPrevBtn");
    const nextButton = diagram.querySelector("#asymmetricNextBtn");

    const steps = [
        {
            title: "Step 1: Bob Creates a Key Pair",
            description: "Bob generates two mathematically related keys: a public key and a private key. He keeps his private key secret.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: Bob Shares His Public Key",
            description: "Bob shares his public key with Alice. The public key can be shared openly, but Bob must protect his private key.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: Alice Encrypts the Message",
            description: "Alice writes HELLO and uses Bob's public key to encrypt it. Only the corresponding private key can decrypt the message in this encryption scheme.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Encrypted Message Is Sent",
            description: "Alice sends the ciphertext to Bob. The message is unreadable to anyone who does not have the required private key.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Bob Decrypts the Message",
            description: "Bob uses his private key to decrypt the ciphertext and recover the original message HELLO.",
            nodes: [3, 4],
            arrows: [3]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
            steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", function() {
        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();
    });

    updateDiagram();
}
// ==========================================
// HYBRID CRYPTOGRAPHY INTERACTIVE DIAGRAM
// ==========================================

function setupHybridDiagram() {

    const diagram = document.getElementById("hybridDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#hybridStepNumber");
    const stepTitle = diagram.querySelector("#hybridStepTitle");
    const stepDescription = diagram.querySelector("#hybridStepDescription");
    const progressBar = diagram.querySelector("#hybridProgressBar");

    const previousButton = diagram.querySelector("#hybridPrevBtn");
    const nextButton = diagram.querySelector("#hybridNextBtn");

    const steps = [
        {
            title: "Step 1: Alice Creates a Message",
            description: "Alice writes her original message HELLO. She wants to send it securely to Bob.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: Alice Generates an AES Key",
            description: "Alice generates a random AES secret key. This key will be used to encrypt the actual message.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: AES and RSA Encrypt the Data",
            description: "AES encrypts the message HELLO using the secret key. At the same time, RSA uses Bob's public key to encrypt and protect the AES secret key.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Alice Sends the Encrypted Package",
            description: "Alice sends two things to Bob: the AES-encrypted message and the RSA-encrypted AES key. Both are needed to recover the original message.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Bob Decrypts the Message",
            description: "Bob uses his RSA private key to recover the AES secret key. Then he uses that AES key to decrypt the message and read HELLO.",
            nodes: [3, 4],
            arrows: [3]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", function() {

        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }

    });

    nextButton.addEventListener("click", function() {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();

    });

    updateDiagram();
}
// ==========================================
// SHA-256 INTERACTIVE DIAGRAM
// ==========================================

function setupSHA256Diagram() {

    const diagram = document.getElementById("sha256Diagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#sha256StepNumber");
    const stepTitle = diagram.querySelector("#sha256StepTitle");
    const stepDescription = diagram.querySelector("#sha256StepDescription");
    const progressBar = diagram.querySelector("#sha256ProgressBar");

    const previousButton = diagram.querySelector("#sha256PrevBtn");
    const nextButton = diagram.querySelector("#sha256NextBtn");

    const steps = [
        {
            title: "Step 1: Enter the Input Message",
            description: "The process starts with an input message. For this example, our input is Hello.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: SHA-256 Receives the Input",
            description: "The SHA-256 algorithm receives the message. It can process input data of different sizes.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: The Algorithm Processes the Data",
            description: "SHA-256 processes the input through its hashing operations to calculate a hash value.",
            nodes: [1],
            arrows: [1]
        },
        {
            title: "Step 4: A 256-Bit Hash Is Generated",
            description: "SHA-256 produces a fixed-length output of 256 bits, regardless of the original message size.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 5: Final Hash Output",
            description: "The final 256-bit hash is commonly displayed as 64 hexadecimal characters. The original message cannot normally be recovered from this hash.",
            nodes: [2, 3],
            arrows: [2]
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", function() {

        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }

    });

    nextButton.addEventListener("click", function() {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();

    });

    updateDiagram();
}
// ==========================================
// PASSWORD SALTING INTERACTIVE DIAGRAM
// ==========================================

function setupSaltingDiagram() {

    const diagram = document.getElementById("saltingDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = diagram.querySelector("#saltingStepNumber");
    const stepTitle = diagram.querySelector("#saltingStepTitle");
    const stepDescription = diagram.querySelector("#saltingStepDescription");
    const progressBar = diagram.querySelector("#saltingProgressBar");

    const previousButton = diagram.querySelector("#saltingPrevBtn");
    const nextButton = diagram.querySelector("#saltingNextBtn");

    const steps = [
        {
            title: "Step 1: User Creates a Password",
            description: "The user creates a password, for example Hello123. The system needs to store it securely.",
            nodes: [0],
            arrows: []
        },
        {
            title: "Step 2: System Generates a Random Salt",
            description: "The system generates a unique random salt, such as A7F92. A different salt should be generated for each password.",
            nodes: [0, 1],
            arrows: [0]
        },
        {
            title: "Step 3: Password and Salt Are Combined",
            description: "The password and salt are combined as input to a password-hashing algorithm such as Argon2id or bcrypt.",
            nodes: [1, 2],
            arrows: [1]
        },
        {
            title: "Step 4: Password Hash Is Generated",
            description: "The password-hashing algorithm processes the combined input and produces a password hash.",
            nodes: [2, 3],
            arrows: [2]
        },
        {
            title: "Step 5: Salt and Hash Are Stored",
            description: "The system stores the salt and password hash in the database. During login, it uses the stored salt and the entered password to verify the password.",
            nodes: [3],
            arrows: []
        }
    ];

    let currentStep = 0;

    function updateDiagram() {

        nodes.forEach((node, index) => {
            node.classList.toggle(
                "active",
                steps[currentStep].nodes.includes(index)
            );
        });

        arrows.forEach((arrow, index) => {
            arrow.classList.toggle(
                "active",
                steps[currentStep].arrows.includes(index)
            );
        });

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        stepTitle.textContent = steps[currentStep].title;

        stepDescription.textContent =
            steps[currentStep].description;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        previousButton.disabled = currentStep === 0;

        nextButton.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    previousButton.addEventListener("click", function() {

        if (currentStep > 0) {
            currentStep--;
            updateDiagram();
        }

    });

    nextButton.addEventListener("click", function() {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        updateDiagram();

    });

    updateDiagram();
}

// ==========================================
// HMAC INTERACTIVE DIAGRAM
// ==========================================

function setupHMACDiagram() {

    const diagram = document.getElementById("hmacDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = document.getElementById("hmacStepNumber");
    const progressBar = document.getElementById("hmacProgressBar");
    const stepTitle = document.getElementById("hmacStepTitle");
    const stepDescription = document.getElementById("hmacStepDescription");

    const prevBtn = document.getElementById("hmacPrevBtn");
    const nextBtn = document.getElementById("hmacNextBtn");

    const steps = [
        {
            title: "Step 1: Alice Creates a Message",
            description: "Alice prepares a message that she wants to send securely to Bob. For example, she creates a message saying: Transfer Rs. 500."
        },
        {
            title: "Step 2: Alice Generates an HMAC",
            description: "Alice uses the message and a shared secret key to calculate an HMAC using SHA-256. The secret key is already known to both Alice and Bob."
        },
        {
            title: "Step 3: Alice Sends the Message",
            description: "Alice sends both the original message and its HMAC to Bob. The message is not encrypted, so HMAC does not hide its contents."
        },
        {
            title: "Step 4: Bob Recalculates the HMAC",
            description: "Bob receives the message and HMAC. He uses the same shared secret key and the received message to calculate a new HMAC."
        },
        {
            title: "Step 5: Bob Verifies the Message",
            description: "Bob compares the received HMAC with his newly calculated HMAC. If they match, the message has not been changed and the sender had access to the shared secret key. Otherwise, Bob rejects the message."
        }
    ];

    let currentStep = 0;

    function showStep() {

        const step = steps[currentStep];

        stepNumber.textContent = `STEP ${currentStep + 1} OF ${steps.length}`;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        stepTitle.textContent = step.title;
        stepDescription.textContent = step.description;

        nodes.forEach(node => node.classList.remove("active"));
        arrows.forEach(arrow => arrow.classList.remove("active"));

        if (currentStep === 0) {
            nodes[0].classList.add("active");
        }

        else if (currentStep === 1) {
            nodes[0].classList.add("active");
            nodes[1].classList.add("active");
            arrows[0].classList.add("active");
        }

        else if (currentStep === 2) {
            nodes[1].classList.add("active");
            nodes[2].classList.add("active");
            arrows[1].classList.add("active");
        }

        else if (currentStep === 3) {
            nodes[2].classList.add("active");
            nodes[3].classList.add("active");
            arrows[2].classList.add("active");
        }

        else if (currentStep === 4) {
            nodes[3].classList.add("active");
        }

        prevBtn.disabled = currentStep === 0;

        nextBtn.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    nextBtn.addEventListener("click", function () {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        showStep();
    });

    prevBtn.addEventListener("click", function () {

        if (currentStep > 0) {
            currentStep--;
            showStep();
        }

    });

    showStep();
}

// ==========================================
// DIGITAL SIGNATURE INTERACTIVE DIAGRAM
// ==========================================

function setupSignatureDiagram() {

    const diagram = document.getElementById("signatureDiagram");

    if (!diagram) return;

    const nodes = diagram.querySelectorAll(".encoding-node");
    const arrows = diagram.querySelectorAll(".encoding-arrow");

    const stepNumber = document.getElementById("signatureStepNumber");
    const progressBar = document.getElementById("signatureProgressBar");
    const stepTitle = document.getElementById("signatureStepTitle");
    const stepDescription = document.getElementById("signatureStepDescription");

    const prevBtn = document.getElementById("signaturePrevBtn");
    const nextBtn = document.getElementById("signatureNextBtn");

    const steps = [
        {
            title: "Step 1: Alice Creates a Message",
            description: "Alice writes a message that she wants to send to Bob. For example: Transfer Rs. 500. She wants Bob to verify that the message is authentic and has not been changed."
        },
        {
            title: "Step 2: Alice Generates a Hash",
            description: "Alice passes the message through the SHA-256 hash function. It produces a fixed-length message digest. Even a small change in the message produces a different hash."
        },
        {
            title: "Step 3: Alice Signs the Hash",
            description: "Alice uses her private key with a digital signature algorithm to create a digital signature for the message hash. Her private key must remain secret."
        },
        {
            title: "Step 4: Alice Sends the Message",
            description: "Alice sends the original message and its digital signature to Bob. The message is not encrypted by the signature process, so its contents are not hidden."
        },
        {
            title: "Step 5: Bob Verifies the Signature",
            description: "Bob uses Alice's trusted public key to verify the signature and checks the message hash. If verification succeeds, it confirms the message's integrity and that the signature was created using the corresponding private key."
        }
    ];

    let currentStep = 0;

    function showStep() {

        const step = steps[currentStep];

        stepNumber.textContent =
            `STEP ${currentStep + 1} OF ${steps.length}`;

        progressBar.style.width =
            `${((currentStep + 1) / steps.length) * 100}%`;

        stepTitle.textContent = step.title;
        stepDescription.textContent = step.description;

        nodes.forEach(node => node.classList.remove("active"));
        arrows.forEach(arrow => arrow.classList.remove("active"));

        if (currentStep === 0) {
            nodes[0].classList.add("active");
        }

        else if (currentStep === 1) {
            nodes[0].classList.add("active");
            nodes[1].classList.add("active");
            arrows[0].classList.add("active");
        }

        else if (currentStep === 2) {
            nodes[1].classList.add("active");
            nodes[2].classList.add("active");
            arrows[1].classList.add("active");
        }

        else if (currentStep === 3) {
            nodes[2].classList.add("active");
            nodes[3].classList.add("active");
            arrows[2].classList.add("active");
        }

        else if (currentStep === 4) {
            nodes[3].classList.add("active");
        }

        prevBtn.disabled = currentStep === 0;

        nextBtn.textContent =
            currentStep === steps.length - 1
                ? "Start Again ↻"
                : "Next Step →";
    }

    nextBtn.addEventListener("click", function () {

        if (currentStep === steps.length - 1) {
            currentStep = 0;
        } else {
            currentStep++;
        }

        showStep();
    });

    prevBtn.addEventListener("click", function () {

        if (currentStep > 0) {
            currentStep--;
            showStep();
        }

    });

    showStep();
}
