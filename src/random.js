return (
    <div className={styles.page}>
      <form className={styles.container}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            placeholder="Full name"
            type="text"
            className={
              error && !fullname
                ? "form-control shadow-smborder border-danger"
                : "form-control shadow-sm"
            }
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="myemail@me.com"
            type="text"
            className={
              (error && !email.includes("@")) || (error && !email)
                ? "form-control shadow-sm border-danger"
                : "form-control shadow-sm"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="password"
            type="password"
            className={
              error && !password
                ? "form-control shadow-sm border-danger"
                : "form-control shadow-sm"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label htmlFor="occupation">Occupation</label>
        <select
          className={
            error && !occupation
              ? "form-control form-group shadow-sm border-danger"
              : "form-control form-group shadow-sm"
          }
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        >
          <option>Select your occupation</option>
          {occupations.map((job, index) => {
            return (
              <option key={index} value={job}>
                {job}
              </option>
            );
          })}
        </select>

        <label htmlFor="state">State</label>
        <select
          className={
            error && !stateOption
              ? "form-control form-group shadow-sm border-danger"
              : "form-control form-group shadow-sm"
          }
          onChange={(e) => setStateOption(e.target.value)}
        >
          <option>Select your state</option>
          {statesDropdown.map((state, index) => {
            return (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
