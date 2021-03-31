import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from '../../js/randomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {/* если title пустой, не зарендерит заголовок */}
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              style={{ backgroundColor: `${randomColor()}` }}
              className={styles['stat-item']}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
